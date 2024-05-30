"use client";
import { useContext, useState } from "react";
import { LogInIcon } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginParams } from "../api/login/route";
import Card from "@/components/card";
import { AuthContext } from "@/contexts/auth-provider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState<string>();
  const { register, reset, handleSubmit } = useForm<LoginParams>();

  const onSubmit: SubmitHandler<LoginParams> = async (data) => {
    try {
      await signIn(data);
    } catch (error) {
      //setErrorMessage("Deu ruim");
      console.log(error)
      reset();
    }
  };

  return (
    <div className="flex h-screen items-center justify-center sm:container sm:mx-auto">
      <Card>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <p className="font-semibold mb-3">Bem vindo de volta!</p>
          <input
            className="mb-2 px-2 py-1 rounded-md text-black text-sm"
            placeholder="Nome de usuário"
            type="text"
            {...register("username")}
          />
          <input
            className="px-2 py-1 rounded-md text-black text-sm"
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          <div className={`flex items-center mt-3 ${errorMessage ? "justify-between" : "justify-end"}`}>
            {errorMessage && (
              <p className="font-semibold ml-2 text-red-400 text-xs">
                {errorMessage}
              </p>
            )}
            <button className="flex font-semibold bg-green-700 gap-1 px-3 py-1 rounded-md text-xs w-fit">
              <LogInIcon size={16} /> Entrar
            </button>
          </div>
        </form>
      </Card>

    </div>
  )
}
export default Login;
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