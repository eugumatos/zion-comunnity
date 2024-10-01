"use client"

import { AppLogo } from '@/ui/AppLogo';
import { SignInForm } from "./_components/SignInForm";

export default function SignIn() {
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden relative">
      <div className="h-full max-h-[645px] w-full max-w-[554px] rounded-[53px] bg-blue-600 absolute sm:relative bottom-[-10px]">
        <div className='mt-[82px] mb-[52px]'>
          <AppLogo />
        </div>
        <SignInForm />
      </div>
    </div>
  );
}