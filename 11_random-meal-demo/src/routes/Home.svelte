<script>
    import { name, setName, getName } from "../stores/profileStore.js";
    import Recipe from "../components/Recipe.svelte";

    const baseUrl =
        import.meta.env.VITE_MEALDB_BASE_URL ||
        "https://www.themealdb.com/api/json/v1";

    const apiKey = import.meta.env.VITE_MEALDB_API_KEY || "1";

    let loading = false;
    let meal = null;
    let error = "";

    async function fetchRandomMeal() {
        const url = baseUrl + "/" + apiKey + "/random.php";
        //const url = `${baseUrl}/${apiKey}/random.php`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Request failed");

        const data = await res.json();
        const m = data?.meals?.[0];
        if (!m) throw new Error("No meal in response");

        return {
            name: m.strMeal,
            category: m.strCategory,
            area: m.strArea,
            instructions: m.strInstructions,
            thumbnail: m.strMealThumb,
        };
    }

    async function surpriseMe() {
        loading = true;
        error = "";
        meal = null;

        try {
            meal = await fetchRandomMeal();
        } catch {
            error = "Konnte kein Rezept laden.";
        } finally {
            loading = false;
        }
    }
</script>

<h1>Willkommen {$name}</h1>

<button on:click={surpriseMe} disabled={loading}>
    {loading ? "Lade..." : "Überrasch mich"}
</button>

{#if error}
    <p class="error">{error}</p>
{/if}

{#if meal}
    <section class="card">
        <h2>{meal.name}</h2>
        <p class="meta">{meal.category} · {meal.area}</p>

        {#if meal.thumbnail}
            <img src={meal.thumbnail} alt={meal.name} />
        {/if}

        <p class="instructions">{meal.instructions}</p>
    </section>
{/if}
