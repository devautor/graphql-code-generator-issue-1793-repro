// Graphql schema of the server API

import { gql } from "apollo-server";

// importing typescript files, each is gql`...` extending types Query, Mutation, Subscription
import addressSchema from "./schema/address";
import commonSchema from "./schema/common";
import customerSchema from "./schema/customer";
import wishlistSchema from "./schema/customerWishlist";
import productSchema from "./schema/product";
import productVariantSchema from "./schema/productVariant";

const blankSchema = gql`
  scalar DateTime
  scalar JSON
  type Query {
    _blank: String
  }

  type Mutation {
    _blank: String
  }

  type Subscription {
    _blank: String
  }
`;

const schema = [
  blankSchema,
  addressSchema,
  commonSchema,
  customerSchema,
  productSchema,
  productVariantSchema,
  wishlistSchema
];

export default schema;
