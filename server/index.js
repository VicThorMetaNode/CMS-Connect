const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
//Grapql http
const { graphqlHTTP } = require("express-graphql");
//schema
const schema = require("./schema/schema");

const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();
//connection to db
connectDB();

//pass cors
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    //if in development mode then use graphiql
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(
  port,
  console.log(`Server is smoothly running on port ${port}`.rainbow.bold)
);
