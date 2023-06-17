"use client";

import Link from "next/link";
import { tarator, mishmash } from "../consts";

const CreateRecipe = () => {
  const submitHandler = async () => {
    const res = await fetch("http://localhost:3000/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarator),
    });

    const result = await res.json();
  };

  return (
    <section>
      <p>Create new recipe page</p>
      <button onClick={submitHandler}>Submit</button>
      <Link href="/">Back</Link>
    </section>
  );
};

export default CreateRecipe;
