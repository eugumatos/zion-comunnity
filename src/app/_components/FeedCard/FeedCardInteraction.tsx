import { useState, useMemo } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { Comments } from "@/domains/Post";
import { togglePostLike } from "@/services/posts";
import { Icon } from "@/ui/Icon";

export const FeedCardInteraction = ({
  postId,
  comments = [],
  likes = [],
}: {
  postId: string;
  comments?: Comments[];
  likes?: Array<string>;
}) => {
  const { user } = useUser();

  const isLiked = useMemo(
    () => user?.fullName && likes.includes(user?.fullName),
    [likes, user?.fullName]
  );

  const { mutate } = useMutation({
    mutationFn: togglePostLike,
  });

  const handleLike = () => {
    if (user?.fullName) {
      mutate({ postId, author: user.fullName });
    }
  };

  return (
    <div className="flex gap-6 px-4">
      <div
        className="flex items-center gap-2"
        onClick={handleLike}
        style={{ cursor: "pointer" }}
      >
        <Icon name="heart" size={24} color={isLiked ? "red" : "gray"} />
        <span className="text-sm text-slate-50">{likes.length}</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon name="comment" size={24} />
        <span className="text-sm text-slate-50">{comments.length}</span>
      </div>
    </div>
  );
};
