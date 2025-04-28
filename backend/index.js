import express from 'express'

const PORT = 3030

const app = express();

app.get("/", (req, res) => {
    res.send("Hello there, this is live");
})

app.listen(PORT, ()=> {
    console.log(`The server is running on the http://localhost:${PORT}`);
})

// mongodb atlas connection!!

// {mongodb+srv://utsabadhikari075:VWOCc3ddaY97to6i@cluster0.oh2zftd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// }


//VWOCc3ddaY97to6i