import { ProductResolvers } from "../generated/resolvers-types";

const Product: ProductResolvers = {
  details: async (root, args, context) => {
    try {
      let {
        name,
        description,
        brand,
        manufacturer,
        tags,
        tax
      } = await context.prisma.product({ id: root.id });

      return {
        name,
        description,
        brand,
        manufacturer,
        tags,
        tax
      };
    } catch (error) {
      console.error(error);
    }
  },
  variants: async (root, args, context) => {
    try {
      return await context.prisma.product({ id: root.id }).variants(args);
    } catch (error) {
      console.error(error);
    }
  }
};

export { Product };
