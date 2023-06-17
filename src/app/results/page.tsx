import Link from "next/link";

type SurveyDataType = {
  rating: string;
  recommendation: string;
  comment: string;
  id: string;
  name: string;
  instructions: string;
};

const getRecipes = async () => {
  const getRecipesUrl = "http://localhost:3000/api/results";
  const res = await fetch(getRecipesUrl);
  const results = await res.json();
  return results.data;
};

export default async function Results() {
  const surveyData: SurveyDataType[] = await getRecipes();

  return (
    <div className="flex flex-col gap-3 items-center mx-auto">
      {surveyData && surveyData.length ? (
        <ul>
          {surveyData.map((data) => (
            <li key={data.id}>
              <p>
                <strong> Name: </strong> {data.name}
              </p>
              <p>
                <strong> Instructions: </strong> {data.instructions}
              </p>
              <p>
                <strong> Rating: </strong> {data.rating}
              </p>
              <p>
                <strong> Recommendation: </strong> {data.recommendation}
              </p>
              <p>
                <strong> Comment: </strong> {data.comment}{" "}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes yet!</p>
      )}

      <Link href="/" className="bg-gray-200 px-8 py-1 rounded-xl">
        Back
      </Link>
    </div>
  );
}
