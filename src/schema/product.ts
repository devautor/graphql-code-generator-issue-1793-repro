import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    """
    Get a product by ID
    """
    product(where: ProductWhereUniqueInput!): Product
    """
    Get a list of products
    """
    products(
      where: ProductWhereInput
      orderBy: ProductOrderByInput
      after: String
      first: Int
    ): [Product]!
    """
    Get a cursor-based paginated list of products
    """
    productsConnection(
      where: ProductWhereInput
      orderBy: ProductOrderByInput
      after: String
      first: Int
    ): ProductConnection!
  }

  extend type Mutation {
    """
    Add a product
    """
    createProductDetails(
      data: ProductDetailsCreateInput!
    ): CreateProductDetailsMutationResponse!
    """
    Update a product
    """
    updateProductDetails(
      data: ProductDetailsUpdateInput!
      where: ProductWhereUniqueInput!
    ): UpdateProductDetailsMutationResponse!
    """
    Delete a product
    """
    deleteProduct(
      where: ProductWhereUniqueInput!
    ): DeleteProductMutationResponse!
  }

  # start of type defs
  """
  Product is an umbrella of actual deliverable variants (SKUs)
  """
  type Product {
    """
    ID
    """
    id: ID!
    """
    Product is published given at least one variant added
    """
    isPublished: Boolean!
    """
    Product's details info
    """
    details: ProductDetails!
    """
    Variants deliverable items under this product umbrella, **in order for UI**
    """
    variants(
      where: ProductVariantWhereInput
      orderBy: ProductVariantOrderByInput
      after: String
      first: Int
    ): [ProductVariant!]
    ## end of variants info
    """
    Created at this time
    """
    createdAt: DateTime!
    """
    Updated at this time
    """
    updatedAt: DateTime!
  }

  """
  Details about a product, umbrella info for SKUs
  """
  type ProductDetails {
    """
    Name of the product
    """
    name: String!
    """
    Description of this product
    """
    description: String!
    """
    Name of the brand
    """
    brand: String!
    """
    Name of the manufacturer
    """
    manufacturer: String
    """
    Tags added to facilitate in search
    """
    tags: [String!]!
    """
    Tax applicable on this product, in percentage
    """
    tax: Float!
  }
  # end of type defs

  # start of Product connection
  """
  Product cursor-based connection type
  """
  type ProductConnection {
    """
    Page info
    """
    pageInfo: PageInfo!
    """
    Edge info
    """
    edges: [ProductEdge]!
    """
    Aggregate info
    """
    aggregate: AggregateProduct!
  }

  """
  Product connection edge type
  """
  type ProductEdge {
    """
    Product node
    """
    node: Product!
    """
    Cursor
    """
    cursor: String!
  }

  """
  Aggregate info on Product connection
  """
  type AggregateProduct {
    """
    Number of Products in a connection
    """
    count: Int!
  }
  # end of Product connection

  # start of mutation payloads
  type CreateProductDetailsMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    product: Product
  }

  type UpdateProductDetailsMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    product: Product
  }

  type DeleteProductMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    product: Product
  }
  # end of mutation payloads

  # start of input types
  input ProductWhereUniqueInput {
    id: ID
  }

  input ProductWhereInput {
    id: ID
    id_in: [ID!]
    isPublished: Boolean
    name: String
    name_in: [String!]
    name_contains: String
    name_starts_with: String
    name_ends_with: String
    brand: String
    brand_in: [String!]
    brand_contains: String
    brand_starts_with: String
    brand_ends_with: String
    manufacturer: String
    manufacturer_in: [String!]
    manufacturer_contains: String
    manufacturer_starts_with: String
    manufacturer_ends_with: String
    tax: Float
    tax_in: [Float!]
    tax_lt: Float
    tax_lte: Float
    tax_gt: Float
    tax_gte: Float
    variants_every: ProductVariantWhereInput
    variants_some: ProductVariantWhereInput
    variants_none: ProductVariantWhereInput
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
    AND: [ProductWhereInput!]
    OR: [ProductWhereInput!]
    NOT: [ProductWhereInput!]
  }

  enum ProductOrderByInput {
    id_ASC
    id_DESC
    isPublished_ASC
    isPublished_DESC
    name_ASC
    name_DESC
    brand_ASC
    brand_DESC
    tax_ASC
    tax_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  input ProductDetailsCreateInput {
    name: String!
    description: String!
    brand: String!
    manufacturer: String
    tags: [String!]
    tax: Float!
  }

  input ProductDetailsUpdateInput {
    name: String
    description: String
    brand: String
    manufacturer: String
    tags: [String!]
    tax: Float
  }

  input ProductUpdateManyWithoutCollectionInput {
    connect: [ProductWhereUniqueInput!]
    disconnect: [ProductWhereUniqueInput!]
  }
  # end of input types
`;

export default typeDefs;
