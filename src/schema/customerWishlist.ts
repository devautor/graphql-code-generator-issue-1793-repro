import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    """
    Get a wishlist of a customer
    """
    customerWishlist(where: CustomerWishlistWhereUniqueInput!): CustomerWishlist
  }

  extend type Mutation {
    """
    Customer adds an item to a wishlist, exisiting or not
    """
    upsertCustomerWishlist(
      where: CustomerWishlistWhereUniqueInput
      create: CustomerWishlistCreateInput
      update: CustomerWishlistUpdateInput
      customer: CustomerWhereUniqueInput!
    ): UpsertCustomerWishlistMutationResponse!
    """
    Customer deletes a wishlist
    """
    deleteCustomerWishlist(
      where: CustomerWishlistWhereUniqueInput!
    ): DeleteCustomerWishlistMutationResponse!
  }

  # start of type CustomerWishlist
  """
  Wishlist curated by a customer
  """
  type CustomerWishlist {
    """
    ID
    """
    id: ID!
    """
    Customer who curated this list
    """
    customer: Customer!
    """
    Name of this wishlist
    """
    listName: String!
    """
    Product Variants added to this list
    """
    productVariants(
      where: ProductVariantWhereInput
      orderBy: ProductVariantOrderByInput
      after: String
      first: Int
    ): [ProductVariant!]
    """
    Created at this time
    """
    createdAt: DateTime!
    """
    Updated at this time
    """
    updatedAt: DateTime!
  }
  # end of type CustomerWishlist

  # start of mutation payloads
  type UpsertCustomerWishlistMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    wishlist: CustomerWishlist
  }

  type DeleteCustomerWishlistMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    wishlist: CustomerWishlist
  }
  # end of mutation payloads

  # start of input types
  input CustomerWishlistWhereUniqueInput {
    id: ID
  }

  enum CustomerWishlistOrderByInput {
    listName_ASC
    listName_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  input CustomerWishlistCreateInput {
    listName: String!
    productVariants: [ProductVariantWhereUniqueInput!]
  }

  input CustomerWishlistUpdateInput {
    connect: [ProductVariantWhereUniqueInput!]
    disconnect: [ProductVariantWhereUniqueInput!]
  }

  # end of input types
`;

export default typeDefs;
