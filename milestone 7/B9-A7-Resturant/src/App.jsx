import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";


const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const addRecipeToQueue = recipe =>{
    const isExist = recipeQueue.find(previousRecipe =>previousRecipe.recipe_id === recipe.recipe_id);

    if(!isExist){
      const newRecipeQueue=[...recipeQueue,recipe];
    setRecipeQueue(newRecipeQueue);
    }
    else{
      alert('Recipe already exist int the queue.')
    }
  }
  const handleRemove=id=>{
        const delRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);

        const newRecipeQueue = recipeQueue.filter(recipe=>recipe.recipe_id !== id);
        setRecipeQueue(newRecipeQueue);
        setPreparedRecipe({...preparedRecipe,delRecipe});
  }
  return (
    <div className="w-10/12 mx-auto px-4 mt-4">
      {/* header */}
      <Header></Header>
      {/* banner */}
      <Banner></Banner>
      {/* our recipes section */}
      <OurRecipes></OurRecipes>
      {/* Recipe Cards Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Cards Section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}/>
        {/* Sidebar */}
        <Sidebar handleRemove={handleRemove} recipeQueue={recipeQueue} preparedRecipe={preparedRecipe}/>
      </section>
    </div>
  );
};

export default App;