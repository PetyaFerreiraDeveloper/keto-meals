// pages/api/submit.js

import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = new Redis({
  url: `${process.env.UPSTASH_REDIS_REST_URL}`,
  token: `${process.env.UPSTASH_REDIS_REST_TOKEN}`,
});

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  console.log(body);

  // Generate a random id to store the survey entry under

  const id =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  // Prepare data to be inserted into the DB
  const data = {
    rating: String(body.rating) || "0",
    recommendation: String(body.recommendation),
    comment: String(body.comment) || "",
    name: String(body.name) || "",
    instructions: String(body.instructions) || "",
    id: String(id),
  };

  // Insert data into Upstash redis

  try {
    //Store the survey data
    await redis.hset(`entries:${id}`, data);

    //Store the id of the survey to retrieve it later
    await redis.sadd("entries", `entries:${id}`);
  } catch (error) {
    console.error("Failed to insert data into redis", error);

    return NextResponse.json({
      status: 500,
      success: false,
      message: "Failed to insert data into redis",
    });
  }

  return NextResponse.json({
    status: 200,
    success: true,
    message: "Data inserted successfully",
    data: data,
  });
}
