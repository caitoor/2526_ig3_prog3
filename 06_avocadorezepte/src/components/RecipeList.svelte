<script>
  import RecipeListItem from './RecipeListItem.svelte';

  // The parent (App) passes the recipes array into this component
  export let recipes = [];

function logRecipeNames() {
    recipes.forEach(recipe => {
        console.log(recipe.name);
    });
}

  console.log('RecipeList received recipes:', recipes);
</script>

<ul class="recipe-list">
  {#if recipes && recipes.length > 0}
    {#each recipes as recipe (recipe.id)}
      <RecipeListItem {recipe} />
    {/each}
  {:else}
    <li class="recipe-list__empty">
      No recipes found.
    </li>
  {/if}
</ul>

<style>
  .recipe-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .recipe-list__empty {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    color: #666;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>
