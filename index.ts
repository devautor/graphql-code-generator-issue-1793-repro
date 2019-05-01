/**
 * ENTRY
 */
require("dotenv").config({ path: __dirname + "/.env" });
import server from "./src/apolloServer";
//import server from "./src/express";

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

// Before express server: This `listen` method launches a web-server.
server.listen().then(async ({ url }) => {
  console.log(`Server ready at ${url}`);
});

/**
 * With express server middleware
 */
// const port = process.env.PORT || 4000;
// expressServer.listen(port, () => {
//   console.log(`Server started at http://localhost:${port}${graphqlPath}`);
// });
