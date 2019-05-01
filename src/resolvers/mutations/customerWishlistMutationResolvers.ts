import { MutationResolvers } from "../../generated/resolvers-types";

const WishlistMutationResolvers: MutationResolvers = {
  /**
   * Customer adds an item to a wishlist, exisiting or not
   */
  upsertCustomerWishlist: async (root, args, context) => {
    try {
      const upsertCustomerWishlistPromise = await context.prisma.upsertCustomerWishlist(
        {
          where: args.where,
          create: {
            customer: {
              connect: args.customer
            },
            listName: args.create.listName,
            productVariants: {
              connect: args.create.productVariants
            }
          },
          update: {
            productVariants: {
              connect: args.update.connect,
              disconnect: args.update.disconnect
            }
          }
        }
      );

      return {
        code: "200",
        success: true,
        message: "Wishlst has been successfully updated.",
        wishlist: upsertCustomerWishlistPromise
      };
    } catch (error) {
      console.error(error);
      return {
        code: "-1",
        success: false,
        message: "An error occured on the server side."
      };
    }
  },

  /**
   * Customer deletes a wishlist
   */
  deleteCustomerWishlist: async (root, args, context) => {
    try {
      // delete
      const deleteCustomerWishlistPromise = await context.prisma.deleteCustomerWishlist(
        args.where
      );

      return {
        code: "200",
        success: true,
        message: "Wishlst has been successfully deleted.",
        wishlist: deleteCustomerWishlistPromise
      };
    } catch (error) {
      console.error(error);
      return {
        code: "-1",
        success: false,
        message: "An error occured on the server side."
      };
    }
  }
};

export default WishlistMutationResolvers;
