/**
 * Makes executable schema for Apollo server API
 * from typedefs and resolvers, and adds permissions middleware
 */

import { makeExecutableSchema } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
// import all scalar resolvers
import { DateTime } from "@okgrow/graphql-scalars";
import GraphQLJSON from "graphql-type-json";

import { applyMiddleware } from "graphql-middleware";

export const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: {
    DateTime,
    JSON: GraphQLJSON,
    ...resolvers
  }
});

// with auth permission middleware, using graphql-shield
export default () => {
  console.log(`Applying permissions middleware...`);
  return applyMiddleware(schema);
};
