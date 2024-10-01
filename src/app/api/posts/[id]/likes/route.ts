import { NextRequest, NextResponse } from "next/server";
import { getCurrentDateTime } from "@/helpers/getCurrentDateTime";
import { getPostById } from "@/lib/db/utils/getPostById";
import { db } from "@/lib/db/connection";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const postId = parseInt(params.id, 10);
  const createdAt = getCurrentDateTime()

  const { author } = await req.json();

  try {
    const likeExists = db.prepare('SELECT * FROM likes WHERE postId = ? AND author = ?').get(postId, author);

    if (likeExists) {
      const stmt = db.prepare('DELETE FROM likes WHERE postId = ? AND author = ?');
      stmt.run(postId, author);
    } else {
      const stmt = db.prepare('INSERT INTO likes (postId, author, createdAt) VALUES (?, ?, ?)');
      stmt.run(postId, author, createdAt);
    }

    const post = getPostById(postId);

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error processing like:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
