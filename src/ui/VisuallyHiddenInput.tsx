import { forwardRef } from "react";

export const VisuallyHiddenInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => (
    <input
      ref={ref}
      {...props}
      className="hidden"
    />
  )
);
