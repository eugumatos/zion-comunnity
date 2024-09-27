"use client";

import React, { useState, InputHTMLAttributes, ForwardRefRenderFunction, forwardRef } from 'react';
import { Public_Sans } from "next/font/google";
import { applyMask } from "@/utils/apply-mask";
import { useDisclosure } from "@/hooks/useDisclosure";

import { Icon } from './Icon';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;

  type?: string;
  mask?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const TextFieldBase: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  { label, name, type = "text", mask, value, onChange, ...props },
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
    ? 'top-[-9.6px] left-5 text-xs bg-blue-600 px-1 scale-90'
    : 'peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100';

  return (
    <div className="relative">
      <input
        ref={ref}
        name={name}
        value={inputValue}
        onChange={handleChangeField}
        type={inputType}
        className={`${publicSans.className} peer block w-full rounded-lg border text-sm font-normal border-[var(--slate-400)] bg-transparent h-[54px] px-3.5 py-0 focus:outline-none focus:border-white transition-all`}
        {...props}
      />
      <label
        htmlFor={name}
        className={`${publicSans.className} absolute left-4 top-[18px] text-sm text-gray-500 pointer-events-none transition-all ${labelClass} peer-focus:top-[-0.60rem] peer-focus:left-5 peer-focus:text-xs peer-focus:bg-blue-600 peer-focus:px-1 peer-focus:scale-90`}
      >
        {label}
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
