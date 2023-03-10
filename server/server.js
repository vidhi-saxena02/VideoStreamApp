const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");

const server = http.createServer(app);

dotenv.config({ path: "./config/config.env" });

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
