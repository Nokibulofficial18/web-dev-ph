const Sidebar = ({ recipeQueue = [], handleRemove, preparedRecipe = [] }) => {
    return (
      <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
        {/* Want to Cook Table */}
        <div className="overflow-x-auto">
          <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">
            Want to Cook: {recipeQueue.length}
          </h2>
          <table className="table">
            {/* Head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recipeQueue.map((recipe, idx) => (
                <tr key={idx} className="hover">
                  <th>{idx + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>
                    {recipe.preparing_time} <br /> minutes
                  </td>
                  <td>
                    {recipe.calories} <br /> Calories
                  </td>
                  <td>
                    <button
                      onClick={() => handleRemove(recipe.recipe_id)}
                      className="btn bg-green-400 rounded-full text-xs font-bold"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Currently Cooking Table */}
        <div className="overflow-x-auto mt-10">
          <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">
            Currently Cooking: {preparedRecipe.length}
          </h2>
          <table className="table">
            {/* Head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {preparedRecipe.map((recipe, idx) => (
                <tr key={idx} className="hover">
                  <th>{idx + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>
                    {recipe.preparing_time} <br /> minutes
                  </td>
                  <td>
                    {recipe.calories} <br /> Calories
                  </td>
                </tr>
              ))}
              <tr>
              <th></th>
                  <td></td>
                  <td>
                    Total Time = 0<br /> minutes
                  </td>
                  <td>
                    Total Calories=0<br /> Calories
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  