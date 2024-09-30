export type Post = {
  id: string;
  author: string;
  content: string;
  likes?: Array<string>;
  comments?: Comments[];
  imageUrl?: string;
  createdAt: string;
}

export type Comments = {
  author: string;
  comment: string;
  createdAt: string;
}