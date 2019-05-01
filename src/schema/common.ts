import { gql } from "apollo-server";

const typeDefs = gql`
  interface Node {
    id: ID!
  }

  """
  MutationResponse interface enables transactional information to be returned in addition to the normal mutation response object
  """
  interface MutationResponse {
    """
    code is a string representing a transactional value explaining details about the status of the data change. Think of this like an HTTP status code.
    """
    code: String!
    """
    success is a boolean indicating whether the update was successful or not.
    """
    success: Boolean!
    """
    message is a string that is meant to be a human-readable description of the status of the transaction. It is intended to be used in the UI of the product.
    """
    message: String!
  }

  """
  Types of mutation
  """
  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  """
  Gender
  """
  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  """
  Universal ID Type
  """
  enum UniversalIdType {
    GTIN
    UPC
    EAN
  }

  """
  Return object for mutation operation on multiple nodes
  """
  type BatchPayload {
    count: Int!
  }

  """
  Info helpful with pagination
  """
  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }
`;

export default typeDefs;
