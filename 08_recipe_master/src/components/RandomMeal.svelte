<script>
    import Recipe from "./Recipe.svelte";

    let meal;
    async function loadRandomMeal() {
        // grabs a random meal from the API
        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/random.php",
        );
        const data = await response.json();
        meal = data.meals[0];
        console.log(meal);
    }
</script>

<section>
    <button on:click={loadRandomMeal}>Get random Recipe</button>
    {#if meal}
        <Recipe {meal} />
    {/if}
</section>

<style>
 
</style>
