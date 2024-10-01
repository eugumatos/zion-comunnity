import { forwardRef } from "react";
import { publicSans } from "@/assets/fonts/fonts";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ ...rest }, ref) => {
  return (
    <textarea
      rows={5}
      className={`${publicSans.className} w-full p-3.5 bg-transparent text-sm border border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white resize-none`}
      placeholder="Compartilhe o que está pensando..."
      ref={ref}
      {...rest}
    ></textarea>
  );
});

TextArea.displayName = 'TextArea';

export { TextArea };
