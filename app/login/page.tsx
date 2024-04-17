"use client";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginInputs {
  user: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log("Formulario");
    console.log(data);
  };

  return (
    <div className="flex bg-[#F2EFE5] container h-screen items-center justify-center mx-auto">
      {/*Card*/}
      <form
        className="flex flex-col bg-white shadow-lg p-5 rounded-lg w-60"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-black font-semibold mb-3">Bem vindo de volta!</p>
        {/*register the input into hook invoking the "register" function*/}
        <input
          className="border-2 mb-2 px-2 py-1 rounded-xl text-sm"
          placeholder="E-mail"
          {...register("user")}
        />
        <input
          className="border-2 mb-3 px-2 py-1 rounded-xl text-sm"
          placeholder="Senha"
          {...register("password")}
        />
        <input
          value={"Login"}
          className="flex self-end bg-green-400 py-1 px-3 rounded-2xl text-xs w-fit"
          type="submit"
        />
      </form>
    </div>
  );
}

//https://react-hook-form.com/get-started
//https://colorhunt.co/palette/b4b4b8c7c8cce3e1d9f2efe5
