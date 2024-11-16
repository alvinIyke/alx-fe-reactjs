import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList'; // Correct import
import AddRecipeForm from './components/AddRecipeForm'; // Correct import
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import EditRecipeForm from './components/EditRecipeForm';

function   App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <EditRecipeForm />
        <DeleteRecipeButton />
        <RecipeList />
        <FavoritesList />
        <SearchBar />
        <RecipeDetails />
        <RecommendationsList />

      </div>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper to extract recipeId from route params
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id, 10)} />;
};

export default App;