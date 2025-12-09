<script>
  //test
  import Header from "./components/Header.svelte";
  import LandingPage from "./components/LandingPage.svelte";
  import RandomMeal from "./components/RandomMeal.svelte";

  let currentScreen = "start";

  function showLandingPage() {
    currentScreen = "start";
  }

  function showRandomMeal() {
    currentScreen = "randomMeal";
  }

</script>

<div id="wrapper">
  <Header />
  <nav>
    <button on:click={showLandingPage}>Start</button>
    <button on:click={showRandomMeal}>Random Meal</button>
  </nav>
  <main>
    {#if currentScreen === "randomMeal"}
      <RandomMeal />
    {:else if currentScreen === "start"}
      <LandingPage />
    {/if}
  </main>
</div>

<style>
  #wrapper {
    padding: 10px;
    max-width: 1200px;
    background-color: white;
  }

  nav {
    background-color: violet;
    padding: 5px;
  }

  main {
    padding: 5px;
  }
</style>
