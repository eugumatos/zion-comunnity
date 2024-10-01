"use client";

import React, { useState, InputHTMLAttributes, ForwardRefRenderFunction, forwardRef } from 'react';
import { Public_Sans } from "next/font/google";
import { applyMask } from "@/helpers/applyMask";
import { useDisclosure } from "@/hooks/useDisclosure";
import { Icon } from './Icon';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
  mask?: string;
  value?: string;
  variant?: "small" | "medium" | "large";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  endAdornment?: React.ReactNode;
  badge?: string | null;
}

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const variantClasses = {
  small: "h-8 text-xs",
  medium: "h-10 text-sm",
  large: "h-[3.375rem] text-sm"
};

const TextFieldBase: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  { label, name, type = "text", mask, value, onChange, variant = "medium", endAdornment, badge, ...props },
  ref
) => {
  const [internalValue, setInternalValue] = useState(value || '');
  const { isOpen, onToggle } = useDisclosure();

  const isControlled = value !== undefined;

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = mask ? applyMask(e.target.value, mask) : e.target.value;

    if (isControlled && onChange) {
      onChange(e);
    } else {
      setInternalValue(newValue);
    }
  };

  const inputType = isOpen && type === 'password' ? 'text' : type;
  const inputValue = isControlled ? value : internalValue;

  const labelClass = inputValue
    ? 'top-[-8px] left-5 text-xs bg-blue-600 px-1 scale-90'
    : 'top-1/2 left-4 transform -translate-y-1/2 text-gray-500 scale-100';

  // Calcular padding-right baseado na presença do badge e endAdornment
  const paddingRight = `${(badge ? 100 : 0) + (endAdornment ? 100 : 0)}px`;

  return (
    <div className="relative">
      <input
        ref={ref}
        name={name}
        type={inputType}
        value={inputValue}
        onChange={handleChangeField}
        className={`${publicSans.className} peer block w-full rounded-lg border text-sm font-normal border-slate-400 bg-transparent ${variantClasses[variant]} px-3.5 py-0`}
        style={{ paddingRight }} // Aplicar o padding-right dinâmico
        {...props}
      />

      {(badge || endAdornment) && (
        <div className="absolute top-0 bottom-0 right-3 flex items-center gap-2">
          {badge && (
            <div className="bg-blue-500 text-white text-xs font-bold rounded-full px-2 py-1">
              {badge}
            </div>
          )}
          {endAdornment && (
            <div className="flex items-center">
              {endAdornment}
            </div>
          )}
        </div>
      )}

      <label
        htmlFor={name}
        className={`${publicSans.className} absolute left-4 transition-all text-sm pointer-events-none ${labelClass} peer-focus:top-[${inputValue ? '-8px' : '-1px'}] peer-focus:left-5 peer-focus:text-xs peer-focus:bg-blue-600 peer-focus:px-1 peer-focus:scale-90`}
      >
        {props.placeholder && !inputValue ? '' : label}
      </label>

      {type === 'password' && (
        <div className="absolute inset-y-0 right-4 flex items-center cursor-pointer" onClick={onToggle}>
          <Icon name={isOpen ? 'eye' : 'eye-off'} size={24} />
        </div>
      )}
    </div>
  );
};

export const TextField = forwardRef(TextFieldBase);
