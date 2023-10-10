import { NextResponse } from "next/server";
import axios from "axios";
import Post from "@/models/post";
import { connectToDB } from "@/utils/db";

export async function GET(request: any) {
  const dbConnection = await connectToDB();

  try {
    const PostModel = await Post.find();
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
