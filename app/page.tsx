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
      <div className="flex bg-white shadow-lg h-40 p-2 rounded-lg w-40">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*register input into hook invoking the "register" function*/}
          <input placeholder="E-mail" {...register("user")} />
          <input {...register("password")} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

//https://react-hook-form.com/get-started
//https://colorhunt.co/palette/b4b4b8c7c8cce3e1d9f2efe5
