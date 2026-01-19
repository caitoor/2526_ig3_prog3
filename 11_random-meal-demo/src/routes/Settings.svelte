<script>
    import { name, setName, getName } from "../stores/profileStore.js";
    let input = "";

    function save() {
        setName(input);
    }

    function reset() {
        setName("Guest");
    }
</script>

<h1>Profilsettings</h1>

<label>
    Name
    <input bind:value={input} placeholder="z.B. Kim" />
</label>

<div class="row">
    <button on:click={save}>Speichern</button>
    <button type="button" on:click={reset}>Zurücksetzen</button>
</div>
