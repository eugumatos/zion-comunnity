import { Card } from "@/ui/Card";
import { Post, Comments } from "@/domains/Post";

import { nunito, montserrat } from "@/assets/fonts/fonts";

import { FeedCardInteraction } from "./FeedCardInteraction";
import { FeedCardCommentField } from "./FeedCardCommentField";
import { FeedCardSkeleton } from "./FeedCardSkeleton";

import Image from 'next/image';

type FeedCardProps = {
  isLoading?: boolean;
  post: Post
}

export const FeedCard = ({ isLoading = false, post }: FeedCardProps) => {
  if (isLoading) return <FeedCardSkeleton />;

  return (
    <Card>
      <div className="flex items-center gap-2 p-4">
        <span className="w-10 h-10 border border-white rounded-full"></span>
        <div className="flex flex-col">
          <h2 className={`${nunito.className} text-base font-bold`}>{post.author}</h2>
          <span className={`${nunito.className} text-[0.625rem] text-slate-100 font-normal`}>
            {new Date(post.createdAt).toLocaleString()}
          </span>
        </div>
      </div>

      {post.imageUrl && (
        <div className="relative w-full h-64">
          <Image
            src={post.imageUrl}
            alt="Post image"
            quality={100}
            fill
          />
        </div>
      )}

      <div className={`flex flex-col ${!post.imageUrl && 'flex-col-reverse'}`}>
        <FeedCardInteraction
          postId={post.id}
          comments={post?.comments}
          likes={post?.likes}
        />
        <p className={`${montserrat.className} text-sm text-gray-300 mt-6 px-4`}>
          {post.content}
        </p>
      </div>

      {post.comments?.map((comment: Comments) => (
        <div>
          <span className="text-white text-sm">{comment.author}</span>
          <p className="text-white text-sm">{comment.comment}</p>
        </div>
      ))}

      <div className="w-full flex justify-between mt-4 gap-3 p-4">
        <div className="flex items-center gap-2">
          <span className="w-10 h-10 border border-white rounded-full"></span>
        </div>

        <FeedCardCommentField postId={post.id} />
      </div>
    </Card>
  );
};
