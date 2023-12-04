import {app} from "./app/web.js";
import {logger} from "./app/logging.js";

app.listen(3000, () => {
    console.log("App Start listening on http://localhost:3000")
    logger.info("App Start listening on http://localhost:3000")
})
<<<<<<< HEAD
=======

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`)
    }
)
>>>>>>> c5ea9117f8895cc76ceaea70e1e1bec5759bdb99
