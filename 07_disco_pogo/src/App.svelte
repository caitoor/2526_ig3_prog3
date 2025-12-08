<script>
  import Dancefloor from "./components/Dancefloor.svelte";
  //let testArray = new Array(5).fill(0);
  let testArray = [0, 0, 0, 0, 0];

  console.log(testArray);

  testArray.forEach((currentItem, i) => {
    console.log(currentItem);
    testArray[i] = i * 2;
  });

  console.log(testArray);
</script>

<header>
  <h1>DISCO POGO</h1>
</header>

<main>
  <Dancefloor width={100} height={100} />
  <Dancefloor width={200} height={200} lampCount={8} />
  <Dancefloor width={100} height={400} lampCount={12} />
</main>

<style>
  header {
    background-color: #bada55;
  }

  h1 {
    text-align: center;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
</style>
