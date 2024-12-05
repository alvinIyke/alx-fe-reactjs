 
  import { useState } from 'react';
  import { useRecipeStore } from './recipeStore';

  const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      addRecipe({ id: Date.now(), title, ingredients, steps });
      setTitle('');
      setIngredients('');
      setSteps('');

    };

    return (
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Add a New Recipe Here</h1>
      <form onSubmit={handleSubmit}>
      
      <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          required
        />
      </div>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients"
          required
        />
         <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder="Preparation Steps"
          required
        />
         <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Recipe
        </button>

      </form>
    </div>
    )
  };
export default AddRecipeForm;

