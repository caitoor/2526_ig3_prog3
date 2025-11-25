<script>
    import Lamp from "./Lamp.svelte";
    export let width;
    export let height;
    export let lampCount = 3;
</script>

<div class="dancefloor" style="width: {width}px; height: {height}px">
    {#each Array(lampCount) as _, i}
        <Lamp />
    {/each}
</div>

<style>
    .dancefloor {
        background-color: gray;
        border: 10px solid lightgrey;
    }
</style>
