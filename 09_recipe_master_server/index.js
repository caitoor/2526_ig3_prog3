const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the Recipe Master Server!!");
});

app.get("/status", (req, res) => {
    // hier könnte auch noch cooler anderer code stehen
    res.json({ status: "Recipe Master Server is running!" });
});

app.post("/chat", async (req, res) => {
    console.log("Received chat request:", req.body);
    const userMessage = req.body.message;

    const ollamaResponse = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt: userMessage,
            model: "llama3.2",
            stream: false
        })
    });
    const ollamaJson = await ollamaResponse.json();
    console.log("Ollama response:", ollamaJson);
    res.json({ answer: ollamaJson.response });
});

app.listen(PORT, () => {
    // meldung, wenn der server gestartet ist
    console.log(`Server is running on http://localhost:${PORT}`);
});