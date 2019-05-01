import { IContext } from "../../src/context";

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Use JavaScript Date object for date/time fields. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

/** Physical address template used in the marketplace */
export type Address = {
  /** ID */
  id: Scalars["ID"];
  /** Flat number or building name */
  building: Scalars["String"];
  /** Locality, area, or street */
  locality: Scalars["String"];
  /** City */
  city: Scalars["String"];
  /** Postal Code */
  postalCode: Scalars["String"];
  /** State */
  state: Scalars["String"];
  /** Landmark nearby, optional */
  landmark?: Maybe<Scalars["String"]>;
  /** Latitude of this location; constraint: Decimal(9,6) */
  latitude?: Maybe<Scalars["Float"]>;
  /** Longitude of this location; constraint: Decimal(9,6) */
  longitude?: Maybe<Scalars["Float"]>;
  /** Name of the address resident */
  recipientName: Scalars["String"];
  /** Mobile number of the address resident */
  recipientMobile: Scalars["String"];
  /** Alternate mobile number of the address resident */
  recipientAlternateMobile?: Maybe<Scalars["String"]>;
  /** Address type option, available only to a customer */
  addressType: AddressType;
  /** Created at this time */
  createdAt: Scalars["DateTime"];
  /** Updated at this time */
  updatedAt: Scalars["DateTime"];
};

export type AddressCreateInput = {
  building: Scalars["String"];
  locality: Scalars["String"];
  city: Scalars["String"];
  postalCode: Scalars["String"];
  state: Scalars["String"];
  landmark?: Maybe<Scalars["String"]>;
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  recipientName: Scalars["String"];
  recipientMobile: Scalars["String"];
  recipientAlternateMobile?: Maybe<Scalars["String"]>;
  addressType?: Maybe<AddressType>;
};

export type AddressCreateOneInput = {
  create?: Maybe<AddressCreateInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
};

export enum AddressOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

/** Types of addresses for a customer */
export enum AddressType {
  Home = "HOME",
  Work = "WORK",
  Other = "OTHER"
}

export type AddressUpdateInput = {
  building?: Maybe<Scalars["String"]>;
  locality?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  postalCode?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  landmark?: Maybe<Scalars["String"]>;
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  recipientName?: Maybe<Scalars["String"]>;
  recipientMobile?: Maybe<Scalars["String"]>;
  recipientAlternateMobile?: Maybe<Scalars["String"]>;
  addressType?: Maybe<AddressType>;
};

export type AddressUpdateOneWithoutCustomerAddressInput = {
  create?: Maybe<AddressCreateInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  where?: Maybe<AddressWhereUniqueInput>;
  update?: Maybe<AddressUpdateInput>;
};

export type AddressWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

/** Aggregate info on Product connection */
export type AggregateProduct = {
  /** Number of Products in a connection */
  count: Scalars["Int"];
};

/** Return object for mutation operation on multiple nodes */
export type BatchPayload = {
  count: Scalars["Int"];
};

export type CreateCustomerAccountMutationResponse = MutationResponse & {
  code: Scalars["String"];
  success: Scalars["Boolean"];
  message: Scalars["String"];
  customer?: Maybe<Customer>;
};

export type CreateProductDetailsMutationResponse = MutationResponse & {
  code: Scalars["String"];
  success: Scalars["Boolean"];
  message: Scalars["String"];
  product?: Maybe<Product>;
};

export type CreateProductVariantMutationResponse = MutationResponse & {
  code: Scalars["String"];
  success: Scalars["Boolean"];
  message: Scalars["String"];
  productVariant?: Maybe<ProductVariant>;
};

/** A customer is a user which buys from the markeplace */
export type Customer = {
  /** ID */
  id: Scalars["ID"];
  /** Email id of the customer (unique) */
  emailId: Scalars["String"];
  /** Mobile number of the customer (unique) */
  mobileNumber?: Maybe<Scalars["String"]>;
  /** Name of the customer */
  name?: Maybe<Scalars["String"]>;
  /** Gender */
  gender?: Maybe<Gender>;
  /** Addresses registered by the customer */
  addresses?: Maybe<Array<Address>>;
  /** Wishlists curated by this customer */
  wishlists?: Maybe<Array<CustomerWishlist>>;
  /** Created at this time */
  createdAt: Scalars["DateTime"];
  /** Updated at this time */
  updatedAt: Scalars["DateTime"];
};

/** A customer is a user which buys from the markeplace */
export type CustomerAddressesArgs = {
  orderBy?: Maybe<AddressOrderByInput>;
};

/** A customer is a user which buys from the markeplace */
export type CustomerWishlistsArgs = {
  orderBy?: Maybe<CustomerWishlistOrderByInput>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
};

export type CustomerAccountCreateInput = {
  emailId?: Maybe<Scalars["String"]>;
  mobileNumber?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  gender?: Maybe<Gender>;
};

export type CustomerAccountUpdateInput = {
  id: Scalars["ID"];
  emailId?: Maybe<Scalars["String"]>;
  mobileNumber?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  gender?: Maybe<Gender>;
  address: AddressUpdateOneWithoutCustomerAddressInput;
};

export type CustomerWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  emailId?: Maybe<Scalars["String"]>;
  emailId_in?: Maybe<Array<Scalars["String"]>>;
  AND?: Maybe<Array<CustomerWhereInput>>;
  OR?: Maybe<Array<CustomerWhereInput>>;
  NOT?: Maybe<Array<CustomerWhereInput>>;
};

export type CustomerWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  emailId?: Maybe<Scalars["String"]>;
};

/** Wishlist curated by a customer */
export type CustomerWishlist = {
  /** ID */
  id: Scalars["ID"];
  /** Customer who curated this list */
  customer: Customer;
  /** Name of this wishlist */
  listName: Scalars["String"];
  /** Product Variants added to this list */
  productVariants?: Maybe<Array<ProductVariant>>;
  /** Created at this time */
  createdAt: Scalars["DateTime"];
  /** Updated at this time */
  updatedAt: Scalars["DateTime"];
};

/** Wishlist curated by a customer */
export type CustomerWishlistProductVariantsArgs = {
  where?: Maybe<ProductVariantWhereInput>;
  orderBy?: Maybe<ProductVariantOrderByInput>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
};

export type CustomerWishlistCreateInput = {
  listName: Scalars["String"];
  productVariants?: Maybe<Array<ProductVariantWhereUniqueInput>>;
};

export enum CustomerWishlistOrderByInput {
  ListNameAsc = "listName_ASC",
  ListNameDesc = "listName_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export type CustomerWishlistUpdateInput = {
  connect?: Maybe<Array<ProductVariantWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductVariantWhereUniqueInput>>;
};

export type CustomerWishlistWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type DeleteCustomerWishlistMutationResponse = MutationResponse & {
  code: Scalars["String"];
  success: Scalars["Boolean"];
  message: Scalars["String"];
  wishlist?: Maybe<CustomerWishlist>;
};

export type DeleteProductMutationResponse = MutationResponse & {
  code: Scalars["String"];
  success: Scalars["Boolean"];
  message: Scalars["String"];
  product?: Maybe<Product>;
};

export type DeleteProductVariantMutationResponse = MutationResponse & {
  code: Scalars["String"];
  success: Scalars["Boolean"];
  message: Scalars["String"];
  productVariant?: Maybe<ProductVariant>;
};

/** Gender */
export enum Gender {
  Male = "MALE",
  Female = "FEMALE",
  Other = "OTHER"
}

export type Mutation = {
  _blank?: Maybe<Scalars["String"]>;
  /** Create a customer account on sign up */
  createCustomerAccount: CreateCustomerAccountMutationResponse;
  /** Customer updates profile & address */
  updateCustomerAccount: UpdateCustomerAccountMutationResponse;
  /** Add a product */
  createProductDetails: CreateProductDetailsMutationResponse;
  /** Update a product */
  updateProductDetails: UpdateProductDetailsMutationResponse;
  /** Delete a product */
  deleteProduct: DeleteProductMutationResponse;
  /** Create a product variant of a product */
  createProductVariant: CreateProductVariantMutationResponse;
  /** Update product variant of a product */
  updateProductVariant: UpdateProductVariantMutationResponse;
  /** Delete product variant of a product */
  deleteProductVariant: DeleteProductVariantMutationResponse;
  /** Customer adds an item to a wishlist, exisiting or not */
  upsertCustomerWishlist: UpsertCustomerWishlistMutationResponse;
  /** Customer deletes a wishlist */
  deleteCustomerWishlist: DeleteCustomerWishlistMutationResponse;
};

export type MutationCreateCustomerAccountArgs = {
  data: CustomerAccountCreateInput;
};

export type MutationUpdateCustomerAccountArgs = {
  data: CustomerAccountUpdateInput;
};

export type MutationCreateProductDetailsArgs = {
  data: ProductDetailsCreateInput;
};

export type MutationUpdateProductDetailsArgs = {
  data: ProductDetailsUpdateInput;
  where: ProductWhereUniqueInput;
};

export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};

export type MutationCreateProductVariantArgs = {
  data: ProductVariantCreateInput;
};

export type MutationUpdateProductVariantArgs = {
  where: ProductVariantWhereUniqueInput;
  data: ProductVariantUpdateInput;
};

export type MutationDeleteProductVariantArgs = {
  where: ProductVariantWhereUniqueInput;
};

export type MutationUpsertCustomerWishlistArgs = {
  where?: Maybe<CustomerWishlistWhereUniqueInput>;
  create?: Maybe<CustomerWishlistCreateInput>;
  update?: Maybe<CustomerWishlistUpdateInput>;
  customer: CustomerWhereUniqueInput;
};

export type MutationDeleteCustomerWishlistArgs = {
  where: CustomerWishlistWhereUniqueInput;
};

/** MutationResponse interface enables transactional information to be returned in
 * addition to the normal mutation response object
 */
export type MutationResponse = {
  /** code is a string representing a transactional value explaining details about
   * the status of the data change. Think of this like an HTTP status code.
   */
  code: Scalars["String"];
  /** success is a boolean indicating whether the update was successful or not. */
  success: Scalars["Boolean"];
  /** message is a string that is meant to be a human-readable description of the
   * status of the transaction. It is intended to be used in the UI of the product.
   */
  message: Scalars["String"];
};

/** Types of mutation */
export enum MutationType {
  Created = "CREATED",
  Updated = "UPDATED",
  Deleted = "DELETED"
}

export type Node = {
  id: Scalars["ID"];
};

/** Info helpful with pagination */
export type PageInfo = {
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

/** Product is an umbrella of actual deliverable variants (SKUs) */
export type Product = {
  /** ID */
  id: Scalars["ID"];
  /** Product is published given at least one variant added */
  isPublished: Scalars["Boolean"];
  /** Product's details info */
  details: ProductDetails;
  /** Variants deliverable items under this product umbrella, **in order for UI** */
  variants?: Maybe<Array<ProductVariant>>;
  /** Created at this time */
  createdAt: Scalars["DateTime"];
  /** Updated at this time */
  updatedAt: Scalars["DateTime"];
};

/** Product is an umbrella of actual deliverable variants (SKUs) */
export type ProductVariantsArgs = {
  where?: Maybe<ProductVariantWhereInput>;
  orderBy?: Maybe<ProductVariantOrderByInput>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
};

/** Product cursor-based connection type */
export type ProductConnection = {
  /** Page info */
  pageInfo: PageInfo;
  /** Edge info */
  edges: Array<Maybe<ProductEdge>>;
  /** Aggregate info */
  aggregate: AggregateProduct;
};

/** Details about a product, umbrella info for SKUs */
export type ProductDetails = {
  /** Name of the product */
  name: Scalars["String"];
  /** Description of this product */
  description: Scalars["String"];
  /** Name of the brand */
  brand: Scalars["String"];
  /** Name of the manufacturer */
  manufacturer?: Maybe<Scalars["String"]>;
  /** Tags added to facilitate in search */
  tags: Array<Scalars["String"]>;
  /** Tax applicable on this product, in percentage */
  tax: Scalars["Float"];
};

export type ProductDetailsCreateInput = {
  name: Scalars["String"];
  description: Scalars["String"];
  brand: Scalars["String"];
  manufacturer?: Maybe<Scalars["String"]>;
  tags?: Maybe<Array<Scalars["String"]>>;
  tax: Scalars["Float"];
};

export type ProductDetailsUpdateInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  brand?: Maybe<Scalars["String"]>;
  manufacturer?: Maybe<Scalars["String"]>;
  tags?: Maybe<Array<Scalars["String"]>>;
  tax?: Maybe<Scalars["Float"]>;
};

/** Product connection edge type */
export type ProductEdge = {
  /** Product node */
  node: Product;
  /** Cursor */
  cursor: Scalars["String"];
};

export enum ProductOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsPublishedAsc = "isPublished_ASC",
  IsPublishedDesc = "isPublished_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  BrandAsc = "brand_ASC",
  BrandDesc = "brand_DESC",
  TaxAsc = "tax_ASC",
  TaxDesc = "tax_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export type ProductUpdateManyWithoutCollectionInput = {
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
};

/** A product variant is a deliverable product item */
export type ProductVariant = {
  /** ID */
  id: Scalars["ID"];
  /** Variant of this product */
  product: Product;
  /** Universal ID type (must be given if universal ID is given) */
  universalIdType?: Maybe<UniversalIdType>;
  /** Universal product ID */
  universalId?: Maybe<Scalars["String"]>;
  /** SKU for this product variant */
  skuId: Scalars["String"];
  /** In stock or not */
  inStock: Scalars["Boolean"];
  /** Listed price of this variant */
  listPrice: Scalars["Int"];
  /** Sale price of this product */
  salePrice: Scalars["Int"];
  /** Created at this time */
  createdAt: Scalars["DateTime"];
  /** Updated at this time */
  updatedAt: Scalars["DateTime"];
};

export type ProductVariantCreateInput = {
  product: ProductWhereUniqueInput;
  universalIdType?: Maybe<UniversalIdType>;
  universalId?: Maybe<Scalars["String"]>;
  skuId: Scalars["String"];
  inStock?: Maybe<Scalars["Boolean"]>;
  listPrice: Scalars["Int"];
  salePrice: Scalars["Int"];
};

export enum ProductVariantOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  UniversalIdTypeAsc = "universalIdType_ASC",
  UniversalIdTypeDesc = "universalIdType_DESC",
  UniversalIdAsc = "universalId_ASC",
  UniversalIdDesc = "universalId_DESC",
  SkuIdAsc = "skuId_ASC",
  SkuIdDesc = "skuId_DESC",
  InStockAsc = "inStock_ASC",
  InStockDesc = "inStock_DESC",
  ListPriceAsc = "listPrice_ASC",
  ListPriceDesc = "listPrice_DESC",
  SalePriceAsc = "salePrice_ASC",
  SalePriceDesc = "salePrice_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export type ProductVariantUpdateInput = {
  universalIdType?: Maybe<UniversalIdType>;
  universalId?: Maybe<Scalars["String"]>;
  skuId?: Maybe<Scalars["String"]>;
  inStock?: Maybe<Scalars["Boolean"]>;
  listPrice?: Maybe<Scalars["Int"]>;
  salePrice?: Maybe<Scalars["Int"]>;
};

export type ProductVariantWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  product?: Maybe<ProductWhereInput>;
  universalIdType?: Maybe<UniversalIdType>;
  universalIdType_in?: Maybe<Array<UniversalIdType>>;
  universalId?: Maybe<Scalars["String"]>;
  universalId_in?: Maybe<Array<Scalars["String"]>>;
  skuId?: Maybe<Scalars["String"]>;
  skuId_in?: Maybe<Array<Scalars["String"]>>;
  skuId_contains?: Maybe<Scalars["String"]>;
  skuId_starts_with?: Maybe<Scalars["String"]>;
  skuId_ends_with?: Maybe<Scalars["String"]>;
  inStock?: Maybe<Scalars["Boolean"]>;
  listPrice?: Maybe<Scalars["Int"]>;
  listPrice_in?: Maybe<Array<Scalars["Int"]>>;
  listPrice_lt?: Maybe<Scalars["Int"]>;
  listPrice_lte?: Maybe<Scalars["Int"]>;
  listPrice_gt?: Maybe<Scalars["Int"]>;
  listPrice_gte?: Maybe<Scalars["Int"]>;
  salePrice?: Maybe<Scalars["Int"]>;
  salePrice_in?: Maybe<Array<Scalars["Int"]>>;
  salePrice_lt?: Maybe<Scalars["Int"]>;
  salePrice_lte?: Maybe<Scalars["Int"]>;
  salePrice_gt?: Maybe<Scalars["Int"]>;
  salePrice_gte?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  AND?: Maybe<Array<ProductVariantWhereInput>>;
  OR?: Maybe<Array<ProductVariantWhereInput>>;
  NOT?: Maybe<Array<ProductVariantWhereInput>>;
};

export type ProductVariantWhereUniqueInput = {
  id: Scalars["ID"];
};

export type ProductWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  isPublished?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  brand?: Maybe<Scalars["String"]>;
  brand_in?: Maybe<Array<Scalars["String"]>>;
  brand_contains?: Maybe<Scalars["String"]>;
  brand_starts_with?: Maybe<Scalars["String"]>;
  brand_ends_with?: Maybe<Scalars["String"]>;
  manufacturer?: Maybe<Scalars["String"]>;
  manufacturer_in?: Maybe<Array<Scalars["String"]>>;
  manufacturer_contains?: Maybe<Scalars["String"]>;
  manufacturer_starts_with?: Maybe<Scalars["String"]>;
  manufacturer_ends_with?: Maybe<Scalars["String"]>;
  tax?: Maybe<Scalars["Float"]>;
  tax_in?: Maybe<Array<Scalars["Float"]>>;
  tax_lt?: Maybe<Scalars["Float"]>;
  tax_lte?: Maybe<Scalars["Float"]>;
  tax_gt?: Maybe<Scalars["Float"]>;
  tax_gte?: Maybe<Scalars["Float"]>;
  variants_every?: Maybe<ProductVariantWhereInput>;
  variants_some?: Maybe<ProductVariantWhereInput>;
  variants_none?: Maybe<ProductVariantWhereInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  AND?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Query = {
  _blank?: Maybe<Scalars["String"]>;
  /** Get a customer by ID */
  customer?: Maybe<Customer>;
  /** Get a product by ID */
  product?: Maybe<Product>;
  /** Get a list of products */
  products: Array<Maybe<Product>>;
  /** Get a cursor-based paginated list of products */
  productsConnection: ProductConnection;
  /** Get a wishlist of a customer */
  customerWishlist?: Maybe<CustomerWishlist>;
};

export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};

export type QueryProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
};

export type QueryProductsConnectionArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
};

export type QueryCustomerWishlistArgs = {
  where: CustomerWishlistWhereUniqueInput;
};

export type Subscription = {
  _blank?: Maybe<Scalars["String"]>;
};

/** Universal ID Type */
export enum UniversalIdType {
  Gtin = "GTIN",
  Upc = "UPC",
  Ean = "EAN"
}

export type UpdateCustomerAccountMutationResponse = MutationResponse & {
  code: Scalars["String"];
  success: Scalars["Boolean"];
  message: Scalars["String"];
  customer?: Maybe<Customer>;
};

export type UpdateProductDetailsMutationResponse = MutationResponse & {
  code: Scalars["String"];
  success: Scalars["Boolean"];
  message: Scalars["String"];
  product?: Maybe<Product>;
};

export type UpdateProductVariantMutationResponse = MutationResponse & {
  code: Scalars["String"];
  success: Scalars["Boolean"];
  message: Scalars["String"];
  productVariant?: Maybe<ProductVariant>;
};

export type UpsertCustomerWishlistMutationResponse = MutationResponse & {
  code: Scalars["String"];
  success: Scalars["Boolean"];
  message: Scalars["String"];
  wishlist?: Maybe<CustomerWishlist>;
};

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: {};
  String: Scalars["String"];
  Customer: Customer;
  ID: Scalars["ID"];
  Gender: Gender;
  AddressOrderByInput: AddressOrderByInput;
  Address: Address;
  Float: Scalars["Float"];
  AddressType: AddressType;
  DateTime: Scalars["DateTime"];
  CustomerWishlistOrderByInput: CustomerWishlistOrderByInput;
  Int: Scalars["Int"];
  CustomerWishlist: CustomerWishlist;
  ProductVariantWhereInput: ProductVariantWhereInput;
  ProductWhereInput: ProductWhereInput;
  Boolean: Scalars["Boolean"];
  UniversalIdType: UniversalIdType;
  ProductVariantOrderByInput: ProductVariantOrderByInput;
  ProductVariant: ProductVariant;
  Product: Product;
  ProductDetails: ProductDetails;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  ProductOrderByInput: ProductOrderByInput;
  ProductConnection: ProductConnection;
  PageInfo: PageInfo;
  ProductEdge: ProductEdge;
  AggregateProduct: AggregateProduct;
  CustomerWishlistWhereUniqueInput: CustomerWishlistWhereUniqueInput;
  Mutation: {};
  CustomerAccountCreateInput: CustomerAccountCreateInput;
  CreateCustomerAccountMutationResponse: CreateCustomerAccountMutationResponse;
  MutationResponse: MutationResponse;
  CustomerAccountUpdateInput: CustomerAccountUpdateInput;
  AddressUpdateOneWithoutCustomerAddressInput: AddressUpdateOneWithoutCustomerAddressInput;
  AddressCreateInput: AddressCreateInput;
  AddressWhereUniqueInput: AddressWhereUniqueInput;
  AddressUpdateInput: AddressUpdateInput;
  UpdateCustomerAccountMutationResponse: UpdateCustomerAccountMutationResponse;
  ProductDetailsCreateInput: ProductDetailsCreateInput;
  CreateProductDetailsMutationResponse: CreateProductDetailsMutationResponse;
  ProductDetailsUpdateInput: ProductDetailsUpdateInput;
  UpdateProductDetailsMutationResponse: UpdateProductDetailsMutationResponse;
  DeleteProductMutationResponse: DeleteProductMutationResponse;
  ProductVariantCreateInput: ProductVariantCreateInput;
  CreateProductVariantMutationResponse: CreateProductVariantMutationResponse;
  ProductVariantWhereUniqueInput: ProductVariantWhereUniqueInput;
  ProductVariantUpdateInput: ProductVariantUpdateInput;
  UpdateProductVariantMutationResponse: UpdateProductVariantMutationResponse;
  DeleteProductVariantMutationResponse: DeleteProductVariantMutationResponse;
  CustomerWishlistCreateInput: CustomerWishlistCreateInput;
  CustomerWishlistUpdateInput: CustomerWishlistUpdateInput;
  CustomerWhereUniqueInput: CustomerWhereUniqueInput;
  UpsertCustomerWishlistMutationResponse: UpsertCustomerWishlistMutationResponse;
  DeleteCustomerWishlistMutationResponse: DeleteCustomerWishlistMutationResponse;
  Subscription: {};
  AddressCreateOneInput: AddressCreateOneInput;
  BatchPayload: BatchPayload;
  CustomerWhereInput: CustomerWhereInput;
  JSON: Scalars["JSON"];
  MutationType: MutationType;
  Node: Node;
  ProductUpdateManyWithoutCollectionInput: ProductUpdateManyWithoutCollectionInput;
}>;

export type AddressResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["Address"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  building?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  locality?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  city?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  state?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  landmark?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  recipientName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  recipientMobile?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  recipientAlternateMobile?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  addressType?: Resolver<
    ResolversTypes["AddressType"],
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
}>;

export type AggregateProductResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["AggregateProduct"]
> = ResolversObject<{
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
}>;

export type BatchPayloadResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["BatchPayload"]
> = ResolversObject<{
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
}>;

export type CreateCustomerAccountMutationResponseResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["CreateCustomerAccountMutationResponse"]
> = ResolversObject<{
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  customer?: Resolver<
    Maybe<ResolversTypes["Customer"]>,
    ParentType,
    ContextType
  >;
}>;

export type CreateProductDetailsMutationResponseResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["CreateProductDetailsMutationResponse"]
> = ResolversObject<{
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes["Product"]>, ParentType, ContextType>;
}>;

export type CreateProductVariantMutationResponseResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["CreateProductVariantMutationResponse"]
> = ResolversObject<{
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  productVariant?: Resolver<
    Maybe<ResolversTypes["ProductVariant"]>,
    ParentType,
    ContextType
  >;
}>;

export type CustomerResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["Customer"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  emailId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  mobileNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes["Gender"]>, ParentType, ContextType>;
  addresses?: Resolver<
    Maybe<Array<ResolversTypes["Address"]>>,
    ParentType,
    ContextType,
    CustomerAddressesArgs
  >;
  wishlists?: Resolver<
    Maybe<Array<ResolversTypes["CustomerWishlist"]>>,
    ParentType,
    ContextType,
    CustomerWishlistsArgs
  >;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
}>;

export type CustomerWishlistResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["CustomerWishlist"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes["Customer"], ParentType, ContextType>;
  listName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  productVariants?: Resolver<
    Maybe<Array<ResolversTypes["ProductVariant"]>>,
    ParentType,
    ContextType,
    CustomerWishlistProductVariantsArgs
  >;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type DeleteCustomerWishlistMutationResponseResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["DeleteCustomerWishlistMutationResponse"]
> = ResolversObject<{
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  wishlist?: Resolver<
    Maybe<ResolversTypes["CustomerWishlist"]>,
    ParentType,
    ContextType
  >;
}>;

export type DeleteProductMutationResponseResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["DeleteProductMutationResponse"]
> = ResolversObject<{
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes["Product"]>, ParentType, ContextType>;
}>;

export type DeleteProductVariantMutationResponseResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["DeleteProductVariantMutationResponse"]
> = ResolversObject<{
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  productVariant?: Resolver<
    Maybe<ResolversTypes["ProductVariant"]>,
    ParentType,
    ContextType
  >;
}>;

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["JSON"], any> {
  name: "JSON";
}

export type MutationResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["Mutation"]
> = ResolversObject<{
  _blank?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createCustomerAccount?: Resolver<
    ResolversTypes["CreateCustomerAccountMutationResponse"],
    ParentType,
    ContextType,
    MutationCreateCustomerAccountArgs
  >;
  updateCustomerAccount?: Resolver<
    ResolversTypes["UpdateCustomerAccountMutationResponse"],
    ParentType,
    ContextType,
    MutationUpdateCustomerAccountArgs
  >;
  createProductDetails?: Resolver<
    ResolversTypes["CreateProductDetailsMutationResponse"],
    ParentType,
    ContextType,
    MutationCreateProductDetailsArgs
  >;
  updateProductDetails?: Resolver<
    ResolversTypes["UpdateProductDetailsMutationResponse"],
    ParentType,
    ContextType,
    MutationUpdateProductDetailsArgs
  >;
  deleteProduct?: Resolver<
    ResolversTypes["DeleteProductMutationResponse"],
    ParentType,
    ContextType,
    MutationDeleteProductArgs
  >;
  createProductVariant?: Resolver<
    ResolversTypes["CreateProductVariantMutationResponse"],
    ParentType,
    ContextType,
    MutationCreateProductVariantArgs
  >;
  updateProductVariant?: Resolver<
    ResolversTypes["UpdateProductVariantMutationResponse"],
    ParentType,
    ContextType,
    MutationUpdateProductVariantArgs
  >;
  deleteProductVariant?: Resolver<
    ResolversTypes["DeleteProductVariantMutationResponse"],
    ParentType,
    ContextType,
    MutationDeleteProductVariantArgs
  >;
  upsertCustomerWishlist?: Resolver<
    ResolversTypes["UpsertCustomerWishlistMutationResponse"],
    ParentType,
    ContextType,
    MutationUpsertCustomerWishlistArgs
  >;
  deleteCustomerWishlist?: Resolver<
    ResolversTypes["DeleteCustomerWishlistMutationResponse"],
    ParentType,
    ContextType,
    MutationDeleteCustomerWishlistArgs
  >;
}>;

export type MutationResponseResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["MutationResponse"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | "CreateCustomerAccountMutationResponse"
    | "UpdateCustomerAccountMutationResponse"
    | "CreateProductDetailsMutationResponse"
    | "UpdateProductDetailsMutationResponse"
    | "DeleteProductMutationResponse"
    | "CreateProductVariantMutationResponse"
    | "UpdateProductVariantMutationResponse"
    | "DeleteProductVariantMutationResponse"
    | "UpsertCustomerWishlistMutationResponse"
    | "DeleteCustomerWishlistMutationResponse",
    ParentType,
    ContextType
  >;
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
}>;

export type NodeResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["Node"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
}>;

export type PageInfoResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["PageInfo"]
> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  endCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
}>;

export type ProductResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["Product"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isPublished?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  details?: Resolver<ResolversTypes["ProductDetails"], ParentType, ContextType>;
  variants?: Resolver<
    Maybe<Array<ResolversTypes["ProductVariant"]>>,
    ParentType,
    ContextType,
    ProductVariantsArgs
  >;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
}>;

export type ProductConnectionResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["ProductConnection"]
> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  edges?: Resolver<
    Array<Maybe<ResolversTypes["ProductEdge"]>>,
    ParentType,
    ContextType
  >;
  aggregate?: Resolver<
    ResolversTypes["AggregateProduct"],
    ParentType,
    ContextType
  >;
}>;

export type ProductDetailsResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["ProductDetails"]
> = ResolversObject<{
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  brand?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  manufacturer?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  tax?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
}>;

export type ProductEdgeResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["ProductEdge"]
> = ResolversObject<{
  node?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
}>;

export type ProductVariantResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["ProductVariant"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
  universalIdType?: Resolver<
    Maybe<ResolversTypes["UniversalIdType"]>,
    ParentType,
    ContextType
  >;
  universalId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  skuId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  inStock?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  listPrice?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["Query"]
> = ResolversObject<{
  _blank?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  customer?: Resolver<
    Maybe<ResolversTypes["Customer"]>,
    ParentType,
    ContextType
  >;
  product?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    QueryProductArgs
  >;
  products?: Resolver<
    Array<Maybe<ResolversTypes["Product"]>>,
    ParentType,
    ContextType,
    QueryProductsArgs
  >;
  productsConnection?: Resolver<
    ResolversTypes["ProductConnection"],
    ParentType,
    ContextType,
    QueryProductsConnectionArgs
  >;
  customerWishlist?: Resolver<
    Maybe<ResolversTypes["CustomerWishlist"]>,
    ParentType,
    ContextType,
    QueryCustomerWishlistArgs
  >;
}>;

export type SubscriptionResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["Subscription"]
> = ResolversObject<{
  _blank?: SubscriptionResolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
}>;

export type UpdateCustomerAccountMutationResponseResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["UpdateCustomerAccountMutationResponse"]
> = ResolversObject<{
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  customer?: Resolver<
    Maybe<ResolversTypes["Customer"]>,
    ParentType,
    ContextType
  >;
}>;

export type UpdateProductDetailsMutationResponseResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["UpdateProductDetailsMutationResponse"]
> = ResolversObject<{
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes["Product"]>, ParentType, ContextType>;
}>;

export type UpdateProductVariantMutationResponseResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["UpdateProductVariantMutationResponse"]
> = ResolversObject<{
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  productVariant?: Resolver<
    Maybe<ResolversTypes["ProductVariant"]>,
    ParentType,
    ContextType
  >;
}>;

export type UpsertCustomerWishlistMutationResponseResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["UpsertCustomerWishlistMutationResponse"]
> = ResolversObject<{
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  wishlist?: Resolver<
    Maybe<ResolversTypes["CustomerWishlist"]>,
    ParentType,
    ContextType
  >;
}>;

export type Resolvers<ContextType = IContext> = ResolversObject<{
  Address?: AddressResolvers<ContextType>;
  AggregateProduct?: AggregateProductResolvers<ContextType>;
  BatchPayload?: BatchPayloadResolvers<ContextType>;
  CreateCustomerAccountMutationResponse?: CreateCustomerAccountMutationResponseResolvers<
    ContextType
  >;
  CreateProductDetailsMutationResponse?: CreateProductDetailsMutationResponseResolvers<
    ContextType
  >;
  CreateProductVariantMutationResponse?: CreateProductVariantMutationResponseResolvers<
    ContextType
  >;
  Customer?: CustomerResolvers<ContextType>;
  CustomerWishlist?: CustomerWishlistResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteCustomerWishlistMutationResponse?: DeleteCustomerWishlistMutationResponseResolvers<
    ContextType
  >;
  DeleteProductMutationResponse?: DeleteProductMutationResponseResolvers<
    ContextType
  >;
  DeleteProductVariantMutationResponse?: DeleteProductVariantMutationResponseResolvers<
    ContextType
  >;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers;
  Node?: NodeResolvers;
  PageInfo?: PageInfoResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductConnection?: ProductConnectionResolvers<ContextType>;
  ProductDetails?: ProductDetailsResolvers<ContextType>;
  ProductEdge?: ProductEdgeResolvers<ContextType>;
  ProductVariant?: ProductVariantResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  UpdateCustomerAccountMutationResponse?: UpdateCustomerAccountMutationResponseResolvers<
    ContextType
  >;
  UpdateProductDetailsMutationResponse?: UpdateProductDetailsMutationResponseResolvers<
    ContextType
  >;
  UpdateProductVariantMutationResponse?: UpdateProductVariantMutationResponseResolvers<
    ContextType
  >;
  UpsertCustomerWishlistMutationResponse?: UpsertCustomerWishlistMutationResponseResolvers<
    ContextType
  >;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = IContext> = Resolvers<ContextType>;
