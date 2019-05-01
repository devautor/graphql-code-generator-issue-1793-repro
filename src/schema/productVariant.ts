import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Mutation {
    """
    Create a product variant of a product
    """
    createProductVariant(
      data: ProductVariantCreateInput!
    ): CreateProductVariantMutationResponse!
    """
    Update product variant of a product
    """
    updateProductVariant(
      where: ProductVariantWhereUniqueInput!
      data: ProductVariantUpdateInput!
    ): UpdateProductVariantMutationResponse!
    """
    Delete product variant of a product
    """
    deleteProductVariant(
      where: ProductVariantWhereUniqueInput!
    ): DeleteProductVariantMutationResponse!
  }

  # start of type defs
  """
  A product variant is a deliverable product item
  """
  type ProductVariant {
    """
    ID
    """
    id: ID!
    """
    Variant of this product
    """
    product: Product!
    """
    Universal ID type (must be given if universal ID is given)
    """
    universalIdType: UniversalIdType
    """
    Universal product ID
    """
    universalId: String
    """
    SKU for this product variant
    """
    skuId: String!
    """
    In stock or not
    """
    inStock: Boolean!
    """
    Listed price of this variant
    """
    listPrice: Int!
    """
    Sale price of this product
    """
    salePrice: Int!
    """
    Created at this time
    """
    createdAt: DateTime!
    """
    Updated at this time
    """
    updatedAt: DateTime!
  }
  # end of type defs

  # start of mutation payloads
  type CreateProductVariantMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    productVariant: ProductVariant
  }

  type UpdateProductVariantMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    productVariant: ProductVariant
  }

  type DeleteProductVariantMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    productVariant: ProductVariant
  }
  # end of mutation payloads

  # start of input types
  input ProductVariantWhereUniqueInput {
    id: ID!
  }

  input ProductVariantWhereInput {
    id: ID
    id_in: [ID!]
    product: ProductWhereInput
    universalIdType: UniversalIdType
    universalIdType_in: [UniversalIdType!]
    universalId: String
    universalId_in: [String!]
    skuId: String
    skuId_in: [String!]
    skuId_contains: String
    skuId_starts_with: String
    skuId_ends_with: String
    inStock: Boolean
    listPrice: Int
    listPrice_in: [Int!]
    listPrice_lt: Int
    listPrice_lte: Int
    listPrice_gt: Int
    listPrice_gte: Int
    salePrice: Int
    salePrice_in: [Int!]
    salePrice_lt: Int
    salePrice_lte: Int
    salePrice_gt: Int
    salePrice_gte: Int
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    AND: [ProductVariantWhereInput!]
    OR: [ProductVariantWhereInput!]
    NOT: [ProductVariantWhereInput!]
  }

  enum ProductVariantOrderByInput {
    id_ASC
    id_DESC
    universalIdType_ASC
    universalIdType_DESC
    universalId_ASC
    universalId_DESC
    skuId_ASC
    skuId_DESC
    inStock_ASC
    inStock_DESC
    listPrice_ASC
    listPrice_DESC
    salePrice_ASC
    salePrice_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  input ProductVariantCreateInput {
    product: ProductWhereUniqueInput!
    universalIdType: UniversalIdType
    universalId: String
    skuId: String!
    inStock: Boolean
    listPrice: Int!
    salePrice: Int!
  }

  input ProductVariantUpdateInput {
    universalIdType: UniversalIdType
    universalId: String
    skuId: String
    inStock: Boolean
    listPrice: Int
    salePrice: Int
  }
  # end of input types
`;

export default typeDefs;
