<script>
    import Recipe from "./Recipe.svelte";
    let searchTerm = "";

    let meals = [];

    async function searchMeals() {
        // Functionality to search meals by name will go here
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
            );
            const data = await response.json();
            meals = data.meals || [];
            console.log(meals);
        } catch (error) {
            console.error("Error fetching random meal:", error);
        }
    }
</script>

<h3>Give me your money</h3>
<input type="text" placeholder="enter meal name" bind:value={searchTerm} />
<button on:click={searchMeals}>Search</button>
{#if meals.length > 0}
    {#each meals as meal}
        <Recipe {meal} />
    {/each}
{/if}

<style></style>
