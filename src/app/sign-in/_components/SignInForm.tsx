import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { montserrat, workSans } from "@/assets/fonts/fonts";
import { Button } from "@/ui/Button";
import { TextField } from "@/ui/TextField";
import {
  signInValidationSchema,
  SignInValidationFormData
} from "../schema/signInValidationSchema";

import toast from "react-hot-toast";

export const SignInForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInValidationFormData>({
    resolver: zodResolver(signInValidationSchema)
  });

  const { isLoaded, signIn, setActive } = useSignIn();

  const router = useRouter();

  const signInApp = async ({ email, password }: SignInValidationFormData) => {
    if (!isLoaded) {
      return
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })

        toast('Bem vindo!', {
          icon: '👏',
        });

        router.push('/');
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err: any) {
      toast.error('Erro ao fazer login.');
    }
  }

  return (
    <div className='mb-16 mx-4 sm:mx-[82px] flex flex-col'>
      <div className='flex flex-col items-center gap-[15px]'>
        <h1 className={`${montserrat.className} text-2xl sm:text-4xl font-semibold`}>Acesse sua conta</h1>
        <span className={`${montserrat.className} text-sm c-grey-400`}>Não tem acesso a plataforma?
          <a href='#' className={`${workSans.className} underline text-teal-500 ml-1`}>Clique aqui</a>
        </span>
      </div>

      <form id="signInForm" onSubmit={handleSubmit(signInApp)} className="mt-[3.625rem] flex flex-col gap-[25px] my-[57px]">
        <TextField
          label="Email"
          variant="large"
          error={errors.email}
          {...register('email')}
        />
        <TextField
          label="Senha"
          type="password"
          variant="large"
          error={errors.password}
          {...register('password')}
        />
      </form>

      <Button className="mb-[15px]" type="submit" form="signInForm" size="large">Entrar</Button>
    </div>
  );
}