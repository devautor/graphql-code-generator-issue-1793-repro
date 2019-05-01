import { MutationResolvers } from "../../generated/resolvers-types";

const ProductVariantMutationResolvers: MutationResolvers = {
  createProductVariant: async (root, args, context) => {
    try {
      const {
        product,
        universalIdType,
        universalId,
        skuId,
        inStock,
        listPrice,
        salePrice
      } = args.data;
      const createProductVariantPromise = await context.prisma.createProductVariant(
        {
          product: {
            connect: product
          },
          universalIdType,
          universalId,
          skuId,
          inStock,
          listPrice,
          salePrice
        }
      );

      return {
        code: "200",
        success: true,
        message: "Product variant has been successfully created.",
        product: createProductVariantPromise
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

  updateProductVariant: async (root, args, context) => {
    try {
      const {
        universalIdType,
        universalId,
        skuId,
        inStock,
        listPrice,
        salePrice
      } = args.data;
      const updateProductVariantPromise = await context.prisma.updateProductVariant(
        {
          where: args.where,
          data: {
            universalIdType,
            universalId,
            skuId,
            inStock,
            listPrice,
            salePrice
          }
        }
      );

      return {
        code: "200",
        success: true,
        message: "Product variant has been successfully updated.",
        product: updateProductVariantPromise
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

  deleteProductVariant: async (root, args, context) => {
    try {
      const deleteProductVariantPromise = await context.prisma.deleteProductVariant(
        args.where
      );

      return {
        code: "200",
        success: true,
        message: "Product variant has been successfully deleted.",
        collection: deleteProductVariantPromise
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

export default ProductVariantMutationResolvers;
