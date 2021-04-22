const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const root = require("./resolver");
const schema = require("./schema");

// GraphQL endpoint / Express server
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("Express/GraphQL server run on 4000!"));
