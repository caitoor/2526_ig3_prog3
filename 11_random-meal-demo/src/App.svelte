<script>
  import Router from "svelte-spa-router";
  import { link } from "svelte-spa-router";

  import Home from "./routes/Home.svelte";
  import Settings from "./routes/Settings.svelte";

  const routes = {
    "/": Home,
    "/settings": Settings,
  };
</script>

<nav>
  <a use:link href="/">Home</a>
  <a use:link href="/settings">Settings</a>
</nav>

<main>
  <Router {routes} />
</main>
