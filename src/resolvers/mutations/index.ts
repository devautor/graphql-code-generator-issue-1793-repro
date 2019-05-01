import CustomerMutationResolvers from "./customerMutationResolvers";
import WishlistMutationResolvers from "./customerWishlistMutationResolvers";
import ProductMutationResolvers from "./productMutationResolvers";

const Mutation = {
  _blank: (root, args, context) => {
    return "Hello mutant user!";
  },
  ...CustomerMutationResolvers,
  ...WishlistMutationResolvers,
  ...ProductMutationResolvers
};

export default Mutation;
