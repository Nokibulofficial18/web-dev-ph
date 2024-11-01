import { useEffect } from "react";
import { useState } from "react";

const Recipes = ({addRecipeToQueue}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  console.log(recipes);
  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {recipes.map(recipe =>(
      <div key={recipe.recipe_id} className="card bg-base-100  border-2">
        <figure className="px-8 pt-6">
          <img className="md:h-52 w-full rounded-xl"
            src={recipe.recipe_image}
            alt={`recipe of ${recipe.recipe_name}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl text-gray-800 font-semibold">{recipe.recipe_name}</h2>
          <p className="text-gray-600 text-base">{recipe.description}</p>
          <h3 className="text-lg text-gray-800 font-medium">Ingredients: {recipe.ingredients.length}</h3>
          <ul className="ml-8">
            {
                recipe.ingredients.map((ingredient,idx) => 
                <li className="list-disc text-gray-600" key={idx}>{ingredient}</li>)
            }
          </ul>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
                <i className="fa-regular fa-clock text-2xl mr-2"></i>
                <p className="text-gray-600">{recipe.preparing_time} minutes</p>
            </div>
            <div className="flex items-center gap-2">
                <i className="fa-solid fa-fire text-2xl mr-2"></i>
                <p className="text-gray-600">{recipe.calories} calories</p>
            </div>
          </div>
          <div className="card-actions justify-start mt-5">
            <button onClick={()=>addRecipeToQueue(recipe)} className="btn bg-green-400 rounded-full text-base font-bold">Want to Cook</button>
          </div>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
};

export default Recipes;
