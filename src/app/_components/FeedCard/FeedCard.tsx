import { useUser } from "@clerk/nextjs";

import { Card } from "@/ui/Card";
import { Post, Comments } from "@/domains/Post";

import { nunito, montserrat } from "@/assets/fonts/fonts";
import { calculateTimeSincePost } from "@/helpers/calculateTimeSincePost";

import { FeedCardInteraction } from "./FeedCardInteraction";
import { FeedCardComment } from "./FeedCardComment";
import { FeedCardCommentField } from "./FeedCardCommentField";
import { FeedCardSkeleton } from "./FeedCardSkeleton";

import { Avatar } from "@/ui/Avatar";

import Image from 'next/image';

type FeedCardProps = {
  isLoading?: boolean;
  post: Post
}

export const FeedCard = ({ isLoading = false, post }: FeedCardProps) => {
  if (isLoading) return <FeedCardSkeleton />;

  const { user } = useUser();

  return (
    <Card>
      <div className="flex items-center gap-2 p-4">
        <Avatar name={post.author} />
        <div className="flex flex-col">
          <h2 className={`${nunito.className} text-base font-bold`}>{post.author}</h2>
          <span className={`${nunito.className} text-[0.625rem] text-slate-100 font-normal`}>
            {calculateTimeSincePost(post.createdAt)}
          </span>
        </div>
      </div>

      {post.imageUrl && (
        <div className="relative w-full h-[11.875rem]">
          <Image
            src={post.imageUrl}
            alt="Post image"
            quality={100}
            className="object-cover"
            fill
          />
        </div>
      )}

      <div className={`my-4 flex flex-col ${!post.imageUrl && 'flex-col-reverse'} gap-6`}>
        <FeedCardInteraction
          postId={post.id}
          comments={post?.comments}
          likes={post?.likes}
        />
        <p className={`${montserrat.className} text-sm text-gray-300 font-normal mt-6 px-4`}>
          {post.content}
        </p>
      </div>

      {post.comments && post.comments.length > 0 &&
        <div className="flex flex-col gap-6 px-4">
          {post.comments?.map((comment: Comments) => (
            <FeedCardComment {...comment} />
          ))}
        </div>
      }

      <div className="w-full flex justify-between mt-4 gap-3 p-4">
        <Avatar name={user?.fullName || ''} />
        <FeedCardCommentField postId={post.id} />
      </div>
    </Card>
  );
};
