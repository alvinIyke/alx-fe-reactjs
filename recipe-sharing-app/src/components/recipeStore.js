import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  
  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  
  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  
  // Update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
 // search and filtering results
  searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
     filteredRecipes: [],
     filterRecipes: () => set(state => ({
     filteredRecipes: state.recipes.filter(recipe =>
     recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
   )   
 })),
}));