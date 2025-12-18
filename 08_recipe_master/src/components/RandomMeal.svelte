<script>
    import Recipe from "./Recipe.svelte";

    let meal;
    async function loadRandomMeal() {
        // grabs a random meal from the API

        try {
            const response = await fetch("http://localhost:3000/random");
            meal = await response.json();
            console.log(meal);
        } catch (error) {
            console.error("Error fetching random meal:", error);
        }
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
