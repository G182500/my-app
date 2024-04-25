"use client";
import { useState } from "react";
import { LogIn } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginInputs {
  user: string;
  password: string;
}

export default function Login() {
  const { register, reset, handleSubmit } = useForm<LoginInputs>();
  const [message, setMessage] = useState<string>();

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const respData = await response.json();

    if (response.status === 200) {
      console.log(respData);
      //Salvar nos cookies o login aqui
    } else {
      setMessage(respData.message);
      reset(); //Limpar os campos
    }
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

//https://lucide.dev/icons/
//https://react-hook-form.com/get-started
//https://colorhunt.co/palette/b4b4b8c7c8cce3e1d9f2efe5
