import { app } from "./app.js";
import { createServer } from "node:http";

const server = createServer(app);

server.listen(3000, "0.0.0.0", () => {
    console.log(`Listening on port: 3000`);
});
