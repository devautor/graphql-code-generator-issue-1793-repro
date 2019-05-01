/**
 * Redefining Prisma client to respect env variables
 * NOTE: Otherwise error with Prisma endpoint in process.env, that "only absolute URLs are supported"
 *
 * This could be used directly from Prisma service, or set in app server's context
 */
import { Prisma } from "./generated/prisma-client-ts";

const prisma = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT || "http://localhost:4466",
  secret: process.env.PRISMA_SECRET || ""
});

export default prisma;
