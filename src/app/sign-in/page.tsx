"use client"

import { AppLogo } from '../_components/AppLogo';
import { SignInForm } from "./SignInForm";

export default function SignIn() {
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="h-full max-h-[645px] w-full max-w-[554px] rounded-[53px] border-0 border-solid border-blue-700 bg-blue-600 relative">
        <AppLogo />
        <SignInForm />
      </div>
    </div>
  );
}
