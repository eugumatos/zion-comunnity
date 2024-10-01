import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";

import { VisuallyHiddenInput } from "@/ui/VisuallyHiddenInput";
import { TextArea } from "@/ui/TextArea";
import { Button } from "@/ui/Button";
import { Icon } from "@/ui/Icon";

import { createPost } from "@/services/posts";
import { Post } from "@/domains/Post";

import Image from "next/image";
import toast from "react-hot-toast";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type FormValues = {
  content: string;
  image: File | null;
};

export const PostPublisher = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { user } = useUser();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const isLargeThan600 = useMediaQuery('(min-width: 600px)');

  const { mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success('Post publicado!');

      reset();
      setImagePreview(null);
      setSelectedFile(null);
    }
  });

  const handleButtonClick = () => {
    const input = document.querySelector('input[name="image"]') as HTMLInputElement;
    if (input) {
      input.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitForm = async (data: FormValues) => {
    if (!selectedFile && !data.content) {
      toast.error('Anexe ou digite antes de publicar.')

      return;
    }

    const formData = new FormData();

    formData.append("author", user?.fullName || "");
    formData.append("content", data.content);

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    mutate(formData);
  };

  return (
    <div className="max-w-[32.75rem] w-full mt-10 rounded-2xl p-6 bg-blue-600 mb-5 shadow-md">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <TextArea {...register("content")} />

        {imagePreview && (
          <div className="mt-4 flex gap-4 w-[476px]">
            <div className="relative w-[257px] h-[145px] rounded-xl overflow-hidden shadow-md">
              <Image
                alt="Preview"
                layout="fill"
                src={imagePreview}
                className="object-cover"
              />
            </div>
            {isLargeThan600 &&
              <div className="flex flex-col w-[145px] h-[144px] justify-center items-center border border-slate-300 border-dotted rounded-20">
                <Icon name="cam" size={32} />
                <span className="text-xs text-slate-300 text-center">
                  Add Image or Video
                </span>
              </div>
            }
          </div>
        )}

        <div className="flex justify-between items-center mt-[1.4375rem]">
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
              {...register("image")}
              onChange={handleImageChange}
            />
          </div>

          <div className="max-w-[7.3125rem] w-full">
            <Button type="submit">
              Publicar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
