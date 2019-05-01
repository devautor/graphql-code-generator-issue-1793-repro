import { QueryResolvers } from "../../generated/resolvers-types";

const Query: QueryResolvers = {
  _blank: (root, args, context) => {
    return "Hello user!";
  },

  /**
   * Get a customer by unique ID
   */
  customer: async (root, args, context) => {
    try {
      return await context.prisma.customer({
        id: root.id
      });
    } catch (error) {
      console.error(error);
    }
  },

  /**
   * Get a wishlist by unique ID
   */
  customerWishlist: async (root, args, context) => {
    try {
      return await context.prisma.customerWishlist(args.where);
    } catch (error) {
      console.error(error);
    }
  },

  /**
   * Get a product by unique ID
   */
  product: async (root, args, context) => {
    try {
      return await context.prisma.product(args.where);
    } catch (error) {
      console.error(error);
    }
  },

  /**
   * Get a list of products
   */
  products: async (root, args, context) => {
    try {
      return await context.prisma.products(args);
    } catch (error) {
      console.error(error);
    }
  },

  /**
   * Get a cursor-based paginated list of products
   */
  productsConnection: async (root, args, context) => {
    try {
      return await context.prisma.productsConnection(args);
    } catch (error) {
      console.error(error);
    }
  }
};

export default Query;
