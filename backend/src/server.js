import {app} from "./app/web.js";
import {logger} from "./app/logging.js";

app.listen(3000, () => {
    logger.info("App Start listening on http://localhost:3000/api/v1/docs")
})
