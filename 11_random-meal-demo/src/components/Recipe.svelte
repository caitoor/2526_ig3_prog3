<script>
    export let meal;
</script>

<div class="meal-card">
    <h3>{meal.strMeal}</h3>
    <img src={meal.strMealThumb} alt={meal.strMeal} />
    <ul>
        <li>Category: {meal.strCategory}</li>
        <li>Area: {meal.strArea}</li>
    </ul>
    <p>{meal.strInstructions}</p>
</div>

<style>
    img {
        max-width: 100px;
        max-height: 100px;
    }
    ul {
        list-style: none;
        padding-left: 0;
    }
</style>
