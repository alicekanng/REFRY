// import React from "react";
// import RecipeDetails from "./RecipeDetails";

// const Recipe = ({ recipe }) => {
//   const { label, image, url, ingredients } = recipe.recipe;
//   return (
//     <div className="recipe">
//       <h2>{label}</h2>
//       <img src={image} alt={label} />
//       <a href={url} target="_blank" rel="noopener noreferrer">
//         URL
//       </a>
//       <button>Ingredients</button>
//       <RecipeDetails ingredients={ingredients} />
//     </div>
//   );
// };

// export default Recipe;

import React from "react";
import RecipeDetails from "./RecipeDetails";
import "./Recipe.css";

const Recipe = ({ recipe }) => {
  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipe">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={label} />
        <h2>{label}</h2>
      </a>
      {/* <button>Ingredients</button> */}
      <RecipeDetails ingredients={ingredients} />
    </div>
  );
};

export default Recipe;
