"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    console.log(form);

    let ingredients = []
    

    const data = {
      rating: form.rating.value,
      recommendation: form.recommendation.value,
      comment: form.comment.value,
      name: form.name.value,
      instructions: form.instructions.value,
      ingredient: form.ingredient.value,
      quantity: form.quantity.value,
      measureUnit: form.measureUnit.value,
    };

    // send data to backend
    await fetch("/api/submit", {
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    alert("Thank you for your reicpe!");
    router.push("/results");
  };

  type RatingType = {
    value: number;
  };

  const RatingOption = ({ value }: RatingType) => (
    <div>
      <input type="radio" name="rating" value={value} required />{" "}
      <label>{value}</label>
    </div>
  );

  return (
    <div onSubmit={handleSubmit}>
      <form className="flex flex-col gap-5 m-10">
        <div className="flex items-center gap-5">
          <label htmlFor="name">Meal Name</label>
          <input
            name="name"
            type="text"
            className="border border-gray-300 rounded-lg px-8 py-1"
          />
        </div>
        <div className="flex items-center gap-5">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            className="border border-gray-300 rounded-lg  px-8 py-1"
            name="instructions"
            placeholder="Cut the ingredients"
          ></textarea>
        </div>
        <div>
          <p>Ingredients: </p>
          <div className="flex">
            <div>
              <label htmlFor="ingredient">Ingredient</label>
              <input
                className="border border-gray-300 rounded-lg  px-8 py-1"
                name="ingredient"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                className="border border-gray-300 rounded-lg  px-8 py-1"
                name="quantity"
                type="number"
              />
            </div>
            <div>
              <label htmlFor="measureUnit">Unit</label>
              <input
                className="border border-gray-300 rounded-lg  px-8 py-1"
                name="measureUnit"
                type="text"
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <label htmlFor="ingredient">Ingredient</label>
              <input
                className="border border-gray-300 rounded-lg  px-8 py-1"
                name="ingredient"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                className="border border-gray-300 rounded-lg  px-8 py-1"
                name="quantity"
                type="number"
              />
            </div>
            <div>
              <label htmlFor="measureUnit">Unit</label>
              <input
                className="border border-gray-300 rounded-lg  px-8 py-1"
                name="measureUnit"
                type="text"
              />
            </div>
          </div>
        </div>
        <div>
          <label>How do you feel about our products/services?</label>
          <div className="flex items-center gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <RatingOption key={value} value={value} />
            ))}
          </div>
        </div>

        <div>
          <label>Would you recommend us to your colleagues?</label>

          <div>
            <input type="radio" name="recommendation" value="yes" required />{" "}
            <label>Yes</label>
          </div>

          <div>
            <input type="radio" name="recommendation" value="no" required />{" "}
            <label>No</label>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <label>Please share your thoughts... (Optional)</label>
          <textarea
            className="border border-gray-300 rounded-lg  px-8 py-1"
            name="comment"
            placeholder="This is what I liked most/this is what you can improve..."
          ></textarea>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
