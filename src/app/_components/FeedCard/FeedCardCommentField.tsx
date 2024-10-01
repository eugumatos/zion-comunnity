import { useState, useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { TextField } from "@/ui/TextField";
import { Icon } from "@/ui/Icon";
import { VisuallyHiddenInput } from "@/ui/VisuallyHiddenInput";
import { useMutation } from "@tanstack/react-query";

import Picker from '@emoji-mart/react';
import toast from "react-hot-toast";

import { createPostComment } from "@/services/posts";

export const FeedCardCommentField = ({ postId }: { postId: string }) => {
  const { user } = useUser();

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { mutate } = useMutation({
    mutationFn: createPostComment,
    onSuccess: () => {
      toast.success('Comentário adicionado');

      setComment('');
      setAttachedFileName(null);
    },
    onError: () => {
      toast.error('Erro ao adicionar comentário');
    }
  });

  const handleEmojiSelect = (emoji: any) => {
    setComment(comment + emoji.native);
    setShowEmojiPicker(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachedFileName(file.name);
    }
  };

  const handleGalleryClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleComment = () => {
    if (comment.trim() === '' || !user?.fullName) return;

    mutate({
      author: user.fullName,
      comment,
      postId,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleComment();
    }
  };

  return (
    <div className="w-full relative">
      <TextField
        label="Comentário"
        name="comment"
        placeholder="Deixe um comentário..."
        value={comment}
        badge={attachedFileName}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={handleKeyDown}
        endAdornment={(
          <div className="flex items-center gap-2">
            <div className="cursor-pointer" onClick={handleGalleryClick}>
              <Icon name="gallery" size={24} />
            </div>
            <div className="cursor-pointer" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
              <Icon name="emoji" size={24} />
            </div>
            {comment.length > 0 &&
              <div className="cursor-pointer" onClick={handleComment}>
                <Icon name="send" size={24} />
              </div>
            }
          </div>
        )}
      />

      {showEmojiPicker && (
        <div className="absolute bottom-full mb-2 right-0 z-10">
          <Picker onEmojiSelect={handleEmojiSelect} />
        </div>
      )}

      <VisuallyHiddenInput
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};
