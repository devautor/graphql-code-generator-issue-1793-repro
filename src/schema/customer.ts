import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    """
    Get a customer by ID
    """
    customer: Customer
  }

  extend type Mutation {
    """
    Create a customer account on sign up
    """
    createCustomerAccount(
      data: CustomerAccountCreateInput!
    ): CreateCustomerAccountMutationResponse!
    """
    Customer updates profile & address
    """
    updateCustomerAccount(
      data: CustomerAccountUpdateInput!
    ): UpdateCustomerAccountMutationResponse!
  }

  """
  A customer is a user which buys from the markeplace
  """
  type Customer {
    """
    ID
    """
    id: ID!
    # Personal Information (both emailId and mobileNumber can't be null together)
    """
    Email id of the customer (unique)
    """
    emailId: String!
    """
    Mobile number of the customer (unique)
    """
    mobileNumber: String
    """
    Name of the customer
    """
    name: String
    """
    Gender
    """
    gender: Gender
    """
    Addresses registered by the customer
    """
    addresses(orderBy: AddressOrderByInput): [Address!]
    # end of personal info

    # Customer's active engagements with products
    """
    Wishlists curated by this customer
    """
    wishlists(
      orderBy: CustomerWishlistOrderByInput
      after: String
      first: Int
    ): [CustomerWishlist!]
    # end of active engagement
    """
    Created at this time
    """
    createdAt: DateTime!
    """
    Updated at this time
    """
    updatedAt: DateTime!
  }

  # start of mutation payloads
  type CreateCustomerAccountMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    customer: Customer
  }

  type UpdateCustomerAccountMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    customer: Customer
  }
  # end of mutation payloads

  # start of input types
  input CustomerWhereUniqueInput {
    id: ID
    emailId: String
  }

  input CustomerWhereInput {
    id: ID
    id_in: [ID!]
    emailId: String
    emailId_in: [String!]
    AND: [CustomerWhereInput!]
    OR: [CustomerWhereInput!]
    NOT: [CustomerWhereInput!]
  }

  input CustomerAccountCreateInput {
    emailId: String
    mobileNumber: String
    name: String
    gender: Gender
  }

  input CustomerAccountUpdateInput {
    id: ID!
    emailId: String
    mobileNumber: String
    name: String
    gender: Gender
    address: AddressUpdateOneWithoutCustomerAddressInput!
  }

  # end of input types
`;

export default typeDefs;
