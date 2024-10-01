import { ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="max-w-[32.75rem] w-full rounded-2xl bg-blue-600">
      {children}
    </div>
  )
}