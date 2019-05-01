import { CustomerResolvers } from "../generated/resolvers-types";
import { fragmentAddressCustomerPrismaResponse } from "./fragments";

const Customer: CustomerResolvers = {
  addresses: async (root, args, context) => {
    try {
      return await context.prisma
        .customer({ id: root.id })
        .addresses(args)
        .$fragment(fragmentAddressCustomerPrismaResponse);
    } catch (error) {
      console.error(error);
    }
  },
  wishlists: async (root, args, context) => {
    try {
      return await context.prisma.customer({ id: root.id }).wishlists(args);
    } catch (error) {
      console.error(error);
    }
  }
};

export { Customer };
