import express from 'express';
import cors from 'cors';

const app = new express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`)
    }
)