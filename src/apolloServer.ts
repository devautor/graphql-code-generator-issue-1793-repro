/**
 * Initialising Apollo server with executable schema and prisma in context
 */
import { ApolloServer } from "apollo-server";
import makeExecutableSchema from "./makeExecutableSchema";
import Prisma from "./prisma";
import { IContext } from "./context";
import { GraphQLFormattedError, GraphQLError } from "graphql";

/* Configuration */

// if (!process.env.PRISMA_ENDPOINT || !process.env.PRISMA_SECRET) {
//   throw new Error("Missing Prisma configuration!");
// }

const server = new ApolloServer({
  schema: makeExecutableSchema(),
  context: ({ request, response }: any): IContext => ({
    request,
    response,
    prisma: Prisma
  }),
  playground: process.env.NODE_ENV === "development",
  introspection: true,
  debug: process.env.NODE_ENV === "development",
  /**
   * masking and logging errors in production
   */
  formatError: (error: GraphQLError): GraphQLFormattedError => {
    console.log("Server error", JSON.stringify(error));
    return new GraphQLError("Internal server error");
    // Or, you can delete the exception information
    // delete error.extensions.exception;
    // return error;
  }
});

const graphqlPath = server.graphqlPath;

export { server as default, graphqlPath };
