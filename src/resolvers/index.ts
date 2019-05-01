import { Address } from "./addressResolvers";
import { Customer } from "./customerResolvers";
import { CustomerWishlist } from "./customerWishlistResolvers";
import Mutation from "./mutations/index";
import { Product } from "./productResolvers";
import { ProductVariant } from "./productVariantResolvers";
import Query from "./queries/index";

export default {
  Address,
  Customer,
  CustomerWishlist,
  Mutation,
  Product,
  ProductVariant,
  Query
};
