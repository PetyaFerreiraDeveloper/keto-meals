import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

export default async function GET() {
  // Retrieve data from redis

  const redis = new Redis({
    url: `${process.env.UPSTASH_REDIS_REST_URL}`,
    token: `${process.env.UPSTASH_REDIS_REST_TOKEN}`,
  });

  try {
    //Find all the entries in the set
    const entries = await redis.smembers("entries");

    //Get all survey entries by id/key

    //To run multiple queries at once, Upstash supports the use of the pipeline command. This way we can run multiple queries at once and get the results in a single call.
    const p = redis.pipeline();
    entries.forEach((id) => {
      p.hgetall(id);
    });
    const results = await p.exec();

    return NextResponse.json({
      status: 200,
      success: true,
      message: "Data retrieved successfully",
      data: results,
    });
  } catch (error) {
    console.error("Failed to retrieve data from redis", error);

    return NextResponse.json({
      status: 500,
      success: false,
      message: "Failed to retrieve data from redis",
    });
  }
}
