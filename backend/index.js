import express from 'express'

const PORT = 3030

const app = express();

app.get("/", (req, res) => {
    res.send("Hello there, this is live");
})

app.listen(PORT, ()=> {
    console.log(`The server is running on the http://localhost:${PORT}`);
})