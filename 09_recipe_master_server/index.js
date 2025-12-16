const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Recipe Master Server!!");
});

app.get("/status", (req, res) => {
    // hier könnte auch noch cooler anderer code stehen
    res.json({ status: "Recipe Master Server is running!" });
});

app.listen(PORT, () => {
    // meldung, wenn der server gestartet ist
    console.log(`Server is running on http://localhost:${PORT}`);
});