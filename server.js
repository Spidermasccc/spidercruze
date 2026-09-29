const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.json({
            success: true,
            message: "Login successful!"
        });
    } else {
        res.json({
            success: false,
            message: "Invalid username or password."
        });
    }
});

app.listen(PORT, () => {
    console.log(`SpiderCruze is running at http://localhost:${PORT}`);
});