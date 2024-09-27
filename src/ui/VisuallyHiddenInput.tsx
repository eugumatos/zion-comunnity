import { forwardRef } from "react";

export const VisuallyHiddenInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => (
    <input
      type="file"
      {...props}
      ref={ref}
      className="hidden"
    />
  )
);
