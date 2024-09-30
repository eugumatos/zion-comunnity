import { Post } from "@/domains/Post";
import { db } from "../connection";

export function getPostById(postId: number): Post | null {
  const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(postId);

  if (!post) {
    return null;
  }

  const comments = db.prepare('SELECT * FROM comments WHERE postId = ?').all(postId);
  const likes = db.prepare('SELECT author FROM likes WHERE postId = ?').all(postId).map((like: any) => like.author);

  return { ...post, comments, likes } as Post;
}
