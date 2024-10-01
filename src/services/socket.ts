import { Post } from "@/domains/Post";

export async function notify(post: Post) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_SOCKET_URL}/update-post`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post }),
    });
  } catch (error) {
    throw new Error('Erro ao notificar socket.')
  }
}