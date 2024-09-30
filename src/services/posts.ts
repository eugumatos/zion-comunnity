import { Post } from "@/domains/Post";

import { notify } from "./socket";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch('/api/posts');

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function createPost(formData: FormData) {
  const res = await fetch('/api/posts', {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Erro ao criar POST");
  }

  const post = await res.json();

  await notify(post);
}

export async function createPostComment({ author, comment, postId }: {
  postId: string;
  author: string;
  comment: string;
}) {
  const res = await fetch(`/api/posts/${postId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ author, comment }),
  });

  if (!res.ok) {
    throw new Error("Erro ao criar comentário");
  }

  const post = await res.json();

  await notify(post);
}

export async function togglePostLike({
  postId,
  author,
}: {
  postId: string;
  author: string;
}) {
  const res = await fetch(`/api/posts/${postId}/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ author }),
  });

  if (!res.ok) {
    throw new Error("Erro ao enviar o like");
  }

  const post = await res.json();

  await notify(post);
}