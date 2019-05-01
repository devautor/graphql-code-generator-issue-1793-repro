import { ProductVariantResolvers } from "../generated/resolvers-types";

const ProductVariant: ProductVariantResolvers = {
  product: async (root, args, context) => {
    try {
      return await context.prisma.productVariant({ id: root.id }).product();
    } catch (error) {
      console.error(error);
    }
  }
};

export { ProductVariant };
