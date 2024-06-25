"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import QuantityInput from "@/components/ui/quantity-input";
import { IProduct } from "@/interfaces/product";
import { generateId } from "@/utils/generate-id";
import { Toaster } from "@/components/ui/toaster/toaster";
import { useToast } from "@/components/ui/toaster/use-toast";

const createProduct = async (product: IProduct) => {
  product._id = generateId();
  product.price = Number(product.price);
  if (!product.images_url) {
    product.images_url = "/imgs/products/iowa.jpeg;";
  }

  const resp = await fetch(`/api/product/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return await resp.json();
};

const Create = () => {
  //const { signIn } = useContext(AuthContext);
  const { toast } = useToast();
  const { register, reset, handleSubmit, setValue, getValues } =
    useForm<IProduct>();

  const onSubmit: SubmitHandler<IProduct> = async (data) => {
    try {
      const resp = await createProduct(data);
      console.log(resp.status === 200);
      /*reset();
        toast({
          variant: "success",
          title: "Produto criado com sucesso",
        });*/
    } catch (error) {
      console.log(error);
    }
  };

  const inputClass = "font-medium text-white placeholder-gray-400";

  return (
    <div className="flex flex-col bg-[#1d1d1d] p-4 space-y-4 sm:rounded-lg">
      <p className="font-semibold text-lg md:text-2xl">New Product</p>
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className={`bg-[#424242] p-2 rounded-md w-full ${inputClass}`}
          placeholder="Title"
          type="text"
          {...register("title", { required: true })}
        />
        <div className="flex space-x-4">
          <select
            className={`bg-[#424242] border-x-4 border-[#424242] rounded-md w-full ${inputClass}`}
            {...register("category", { required: true })}
          >
            <option value="Compact Discs">Compact Discs</option>
            <option value="Movies">Movies</option>
            <option value="Posters">Posters</option>
            <option value="T-Shirts">T-Shirts</option>
          </select>
          <div className="flex bg-[#424242] p-2 rounded-md gap-2">
            <p className="font-medium text-white">R$</p>
            <input
              className="bg-transparent font-medium text-white w-24 placeholder:italic"
              placeholder="1499.90"
              type="text"
              {...register("price", {
                required: true,
              })}
            />
          </div>
        </div>
        <textarea
          className="flex bg-[#424242] font-medium text-sm text-white py-1 px-2 rounded-md h-40 w-full"
          {...register("description")}
          placeholder="Description"
        />
        <div className="flex space-x-4">
          <QuantityInput
            increment={() =>
              setValue("quantity", Number(getValues("quantity")) + 1)
            }
            decrement={() =>
              setValue("quantity", Number(getValues("quantity")) - 1)
            }
            register={register("quantity", { required: true })}
          />
          <button
            className="flex bg-[#1b5a8d] font-semibold items-center justify-center gap-2 py-3 rounded-md w-full"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};
export default Create;

/*
import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})
 
export const runtime = 'edge'
 
export async function POST(req: Request) {
  const { messages } = await req.json()
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  })
 
  const stream = OpenAIStream(response)
 
  return new StreamingTextResponse(stream)
}

//https://lucide.dev/icons/
//https://react-hook-form.com/get-started
//https://colorhunt.co/palette/b4b4b8c7c8cce3e1d9f2efe5
*/
