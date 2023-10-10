import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/db";
import Post from "@/models/post";

export async function GET(req, { params: { id } }: any) {
  try {
    const dbConnection = await connectToDB();
    const PostModel = await Post.findOne({ number: id });

    if (PostModel) {
      return new NextResponse(JSON.stringify(PostModel), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    return NextResponse.error();
  }
}
