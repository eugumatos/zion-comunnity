"use client";

import { UserButton } from "@clerk/nextjs";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { AppLogo } from "@/ui/AppLogo";
import { PostPublisher } from "./_components/PostPublisher";
import { FeedCard } from "./_components/FeedCard/FeedCard";

import { useSocket } from "@/hooks/useSocket";
import { getPosts } from "@/services/posts";
import { Post } from "@/domains/Post";

export default function Feed() {
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts,
    refetchOnWindowFocus: true,
    staleTime: 5000,
  });

  const queryClient = useQueryClient();

  useSocket("post-update", (data) => {
    queryClient.setQueryData(['posts'], (oldPosts: Post[]) => {
      const postIndex = oldPosts.findIndex((p) => p.id === data.post.id);

      if (postIndex !== -1) {
        const updatedPosts = [...oldPosts];
        updatedPosts[postIndex] = {
          ...oldPosts[postIndex],
          likes: data.post.likes,
          comments: data.post.comments,
        };

        return updatedPosts;
      }

      return [data.post, ...oldPosts];
    });
  });

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="z-10 flex justify-end p-10">
        <UserButton />
      </div>
      <div className="flex flex-col items-center w-full">
        <AppLogo />
        <PostPublisher />

        <div className='max-w-[32.75rem] mb-8 w-full flex flex-col gap-4'>
          {posts?.map((post: Post) => (
            <FeedCard isLoading={isLoading} post={{ ...post }} />
          ))}
        </div>
      </div>
    </div>
  );
}
