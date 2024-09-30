import { Montserrat, Work_Sans } from "next/font/google"
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/ui/Button";
import { TextField } from "@/ui/TextField";
import toast from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '600', '700'],
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

type SignInFormData = {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const { register, handleSubmit } = useForm<SignInFormData>();
  const { isLoaded, signIn, setActive } = useSignIn();

  const router = useRouter();

  const signInApp = async ({ email, password }: SignInFormData) => {
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

        router.push('/')
      } else {

        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err: any) {
      toast.error('Erro ao fazer login');
    }
  }

  return (
    <div className='mb-16 mx-[82px] flex flex-col'>
      <div className='flex flex-col items-center gap-[15px]'>
        <h1 className={`${montserrat.className} text-4xl font-semibold`}>Acesse sua conta</h1>
        <span className={`${montserrat.className} text-[0.875rem] c-grey-400`}>Não tem acesso a plataforma?
          <a href='#' className={`${workSans.className} underline text-teal-500 ml-1`}>Clique aqui</a>
        </span>
      </div>

      <form id="signInForm" onSubmit={handleSubmit(signInApp)} className="mt-[3.625rem] flex flex-col gap-[25px] my-[57px]">
        <TextField variant="large" type="email" label="Email" {...register('email')} />
        <TextField variant="large" type="password" label="Senha" maxLength={101} {...register('password')} />
      </form>

      <Button className="mb-[15px]" type="submit" form="signInForm" size="large">Entrar</Button>
    </div>
  );
}