import { CustomerWishlistResolvers } from "../generated/resolvers-types";

const CustomerWishlist: CustomerWishlistResolvers = {
  customer: async (root, args, context) => {
    try {
      return await context.prisma.customerWishlist({ id: root.id }).customer();
    } catch (error) {
      console.error(error);
    }
  },
  productVariants: async (root, args, context) => {
    try {
      return await context.prisma
        .customerWishlist({ id: root.id })
        .productVariants(args);
    } catch (error) {
      console.error(error);
    }
  }
};

export { CustomerWishlist };
