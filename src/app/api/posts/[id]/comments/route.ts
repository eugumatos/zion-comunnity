import { NextRequest, NextResponse } from "next/server";
import { getCurrentDateTime } from "@/helpers/getCurrentDateTime";
import { getPostById } from "@/lib/db/utils/getPostById";
import { db } from "@/lib/db/connection";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const postId = parseInt(params.id, 10);
  const createdAt = getCurrentDateTime()

  const { author, comment } = await req.json();

  try {
    const stmt = db.prepare('INSERT INTO comments (postId, author, comment, createdAt) VALUES (?, ?, ?, ?)');
    stmt.run(postId, author, comment, createdAt);

    const post = getPostById(postId);

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error creating comment:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
