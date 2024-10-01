import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";

import path from "path";

import { getCurrentDateTime } from "@/helpers/getCurrentDateTime";
import { getPostById } from "@/lib/db/utils/getPostById";
import { db } from "@/lib/db/connection";

import { Post } from "@/domains/Post";

const uploadDir = path.join(process.cwd(), 'public/uploads');

export async function GET() {
  try {
    const posts = db.prepare('SELECT * FROM posts').all() as Post[];

    const postsWithDetails = posts.map((post: Post) => getPostById(Number(post.id)));

    return NextResponse.json(postsWithDetails);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const author = formData.get('author') as string;
    const content = formData.get('content') as string;
    const image = formData.get('image') as File | null;

    const createdAt = getCurrentDateTime()

    let imageUrl = null;

    if (image) {
      const fileName = `${Date.now()}-${image.name}`;
      const filePath = path.join(uploadDir, fileName);

      await fs.mkdir(uploadDir, { recursive: true });
      const fileBuffer = Buffer.from(await image.arrayBuffer());
      await fs.writeFile(filePath, fileBuffer);

      imageUrl = `/uploads/${fileName}`;
    }

    const stmt = db.prepare('INSERT INTO posts (author, content, imageUrl, createdAt) VALUES (?, ?, ?, ?)');
    const result = stmt.run(author, content, imageUrl, createdAt);

    const post = getPostById(Number(result.lastInsertRowid));

    console.log(post)

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
