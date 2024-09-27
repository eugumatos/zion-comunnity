import { ButtonHTMLAttributes } from 'react';
import { Work_Sans } from "next/font/google"

const sizeClasses = {
  small: 'py-2 px-4 text-sm',
  medium: 'py-3 px-5 text-base',
  large: 'py-5 px-6 text-base',
} as const;

const variantClasses = {
  primary: 'bg-teal-600',
  secondary: 'bg-slate-500'
}

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'button';
  children?: React.ReactNode;

  icon?: JSX.Element;
  size?: keyof typeof sizeClasses;
  variant?: keyof typeof variantClasses;
}

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['600'],
});

export const Button = ({ type, children, icon, variant = 'primary', size = "small", ...rest }: CustomButtonProps) => {
  return (
    <button
      {...rest}
      type={type}
      className={`${workSans.className} ${sizeClasses[size]} ${variantClasses[variant]} w-full flex items-center justify-center font-semibold rounded-[999px] duration-300 hover:opacity-50`}
    >
      {icon &&
        <div className='mr-2'>
          {icon}
        </div>
      }

      {children}
    </button>
  );
}
