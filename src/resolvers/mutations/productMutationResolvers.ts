import { MutationResolvers } from "../../generated/resolvers-types";

const ProductMutationResolvers: MutationResolvers = {
  createProductDetails: async (root, args, context) => {
    try {
      const { name, brand, description, tax, manufacturer, tags } = args.data;

      // create product details
      const createProductDetailsPromise = await context.prisma.createProduct({
        name,
        description,
        brand,
        manufacturer,
        tax,
        tags: {
          set: tags
        }
      });
      return {
        code: "200",
        success: true,
        message: "Product has been created with these details.",
        product: createProductDetailsPromise
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

  updateProductDetails: async (root, args, context) => {
    try {
      const { name, description, brand, manufacturer, tags, tax } = args.data;

      // update product details
      const updateProductDetailsPromise = await context.prisma.updateProduct({
        where: args.where,
        data: {
          name,
          brand,
          manufacturer,
          description,
          tax,
          tags: {
            set: tags
          }
        }
      });

      return {
        code: "200",
        success: true,
        message: "Product details have been updated.",
        post: updateProductDetailsPromise
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

  deleteProduct: async (root, args, context) => {
    try {
      // delete this product
      const deleteProductPromise = await context.prisma.deleteProduct(
        args.where
      );
      return {
        code: "200",
        success: true,
        message: "Product has been deleted.",
        post: deleteProductPromise
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

export default ProductMutationResolvers;
