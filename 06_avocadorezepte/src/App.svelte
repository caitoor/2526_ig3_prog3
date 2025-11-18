<script>
  import RecipeList from './components/RecipeList.svelte';
  import data from './assets/recipes.json';

  console.log('Full recipe data:', data);

  // Extract only the recipe array from the JSON
  const recipes = data.recipes;

  console.log('Recipe array in App:', recipes);
</script>

<main>
  <h1>Avocado Recipes</h1>

  <RecipeList {recipes} />
</main>

<style>
  main {
    max-width: 600px;
    margin: 0 auto;
    padding: 1.5rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  h1 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    text-align: center;
  }
</style>
