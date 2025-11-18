<script>
  // Each list item gets exactly one recipe object
  export let recipe;

  console.log('RecipeListItem created for:', recipe ? recipe.title : 'no recipe data');

  let title = 'Untitled recipe';
  let category = 'No category';

  if (recipe && recipe.title) {
    title = recipe.title;
  }

  if (recipe && recipe.meta && recipe.meta.category) {
    category = recipe.meta.category;
  }
</script>

<li class="recipe-item">
  <div class="recipe-item__title">
    {title}
  </div>
  <div class="recipe-item__category">
    {category}
  </div>
</li>

<style>
  .recipe-item {
    display: flex;
    flex-direction: column;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #eee;
  }

  .recipe-item:last-child {
    border-bottom: none;
  }

  .recipe-item__title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .recipe-item__category {
    font-size: 0.85rem;
    color: #666;
  }
</style>
