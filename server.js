const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// GraphQL Schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
const root = {
  message: () => "Hello GraphQL!",
};

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
