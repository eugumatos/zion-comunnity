"use client"

import { Button } from '@/ui/Button';
import { Icon } from '@/ui/Icon';
import { TextArea } from '@/ui/TextArea';
import { VisuallyHiddenInput } from '@/ui/VisuallyHiddenInput';

import { Public_Sans } from "next/font/google";
import { useState, useRef } from "react";
import { AppLogo } from '../_components/AppLogo';

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Feed() {
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (image) {
      console.log("Imagem:", image);
    }
    setContent("");
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div className='h-screen w-full flex justify-center'>
      <div className='flex flex-col items-center w-full'>
        <AppLogo />
        <div className="max-w-[32.75rem] w-full rounded-2xl p-6 bg-blue-600	 shadow-md">
          <form onSubmit={handleSubmit}>
            <TextArea />

            {imagePreview && (
              <div className="mt-4 flex gap-4 w-[476px]">
                <img
                  alt="Preview"
                  src={imagePreview}
                  className="h-[145px] w-[257px] rounded-xl shadow-md object-cover"
                />
                <div className='flex flex-col w-[145px] h-[144px] justify-center items-center border border-slate-300 border-dotted rounded-20'>
                  <Icon name='cam' size={32} />
                  <span className={`${publicSans.className} text-xs text-slate-300 text-center`}>Add Imagem <br /> ou video</span>
                </div>
              </div>
            )}

            <div className='flex justify-between items-center mt-[1.4375rem]'>
              <div className="max-w-[9rem] w-full relative">
                <Button
                  type="button"
                  variant="secondary"
                  icon={<Icon name="image" size={24} />}
                  onClick={handleButtonClick}
                >
                  Image/Video
                </Button>
                <VisuallyHiddenInput
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                />
              </div>

              <div className="max-w-[7.3125rem] w-full">
                <Button type='button'>Publicar</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
