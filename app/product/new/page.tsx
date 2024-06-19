"use client";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "@/contexts/auth-provider";
import QuantityInput from "@/components/quantity-input";
import { IProduct } from "@/interfaces/product";
import { generateId } from "@/utils/generate-id";

const createProduct = async (product: IProduct) => {
  product.id = generateId();
  if (!product.imagesUrl) product.imagesUrl = "";

  console.log(product);
  /*
  const response = await fetch(`/api/product/${id}`, {
    method: "GET",
  });*/
};

const Create = () => {
  const { signIn } = useContext(AuthContext);
  const { register, reset, handleSubmit, setValue, getValues } =
    useForm<IProduct>();

  const onSubmit: SubmitHandler<IProduct> = async (data) => {
    try {
      await createProduct(data);
    } catch (error) {
      console.log(error);
      reset();
    }
  };

  const inputClass = "font-medium text-white placeholder-gray-400";

  return (
    <div className="container mx-auto pt-16 sm:pt-[68px]">
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
              <option value="T-Shirts">T-Shirts</option>
            </select>
            <div className="flex bg-[#424242] p-2 rounded-md gap-2">
              <p className="font-medium text-white">R$</p>
              <input
                className="bg-transparent font-medium text-white w-24 placeholder:italic"
                placeholder="1499,90"
                type="text"
                {...register("price", {
                  required: true,
                  pattern: {
                    value: /^\d+(\,\d{1,2})?$/,
                    message: "Por favor, insira um preço válido.",
                  },
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
      </div>
    </div>
  );
};
export default Create;
/*
interface LoginForm {
  user: string;
  password: string;
}

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const { register, reset, handleSubmit } = useForm<LoginForm>();
  const router = useRouter();

  //Auth
  useEffect(() => {
    const authenticatedUser = localStorage.getItem("token");
    if (authenticatedUser) {
      console.log(localStorage);
      void router.push("/");
    }
  }, [router]);

  //Form
  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const { message, session }: { message: string; session: Session } =
        await response.json();

      if (response.status === 200) {
        //disponível em console.log -> application
        localStorage.setItem("userId", session.user.id);
        localStorage.setItem("token", session.token);
        void router.push("/");
      } else {
        setMessage(message);
        reset(); //Limpar os campos
      }
    } catch (error) {
      console.log(error);
      setMessage("Erro no servidor");
    }
    setIsLoading(false);
  };

  //container does not center itself automatically (mx-auto)
  return (
    <div className="flex container h-screen items-center justify-center mx-auto">
      <form
        className="flex flex-col bg-white shadow-lg p-5 rounded-lg w-60"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-black font-semibold mb-3">Bem vindo de volta!</p>
        <input
          className="text-black text-xs"
          placeholder="E-mail"
          {...register("user")}
        />
        <input
          className="text-black text-xs"
          placeholder="Senha"
          type="password"
          {...register("password")}
        />
        {isLoading && (
          <p className="font-semibold ml-2 text-blue-600 text-[8px]">
            Carregando...
          </p>
        )}
        {message && (
          <p className="font-semibold ml-2 text-red-600 text-[8px]">
            {message}
          </p>
        )}
        <button
          className="success font-semibold self-end text-xs w-fit"
          type="submit"
        >
          <LogIn size={16} />
          Entrar
        </button>
      </form>
    </div>
  );
}

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
