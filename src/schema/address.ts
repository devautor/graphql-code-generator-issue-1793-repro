import { gql } from "apollo-server";

const typeDefs = gql`
  """
  Physical address template used in the marketplace
  """
  type Address {
    """
    ID
    """
    id: ID!
    """
    Flat number or building name
    """
    building: String!
    """
    Locality, area, or street
    """
    locality: String!
    """
    City
    """
    city: String!
    """
    Postal Code
    """
    postalCode: String!
    """
    State
    """
    state: String!
    """
    Landmark nearby, optional
    """
    landmark: String

    # Geolocation of the address
    """
    Latitude of this location; constraint: Decimal(9,6)
    """
    latitude: Float
    """
    Longitude of this location; constraint: Decimal(9,6)
    """
    longitude: Float

    """
    Name of the address resident
    """
    recipientName: String!
    """
    Mobile number of the address resident
    """
    recipientMobile: String!
    """
    Alternate mobile number of the address resident
    """
    recipientAlternateMobile: String
    """
    Address type option, available only to a customer
    """
    addressType: AddressType!
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
  Types of addresses for a customer
  """
  enum AddressType {
    HOME
    WORK
    OTHER
  }

  # start of input types
  input AddressWhereUniqueInput {
    id: ID
  }

  enum AddressOrderByInput {
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  input AddressCreateOneInput {
    create: AddressCreateInput
    connect: AddressWhereUniqueInput
  }

  input AddressCreateInput {
    building: String!
    locality: String!
    city: String!
    postalCode: String!
    state: String!
    landmark: String
    latitude: Float
    longitude: Float
    recipientName: String!
    recipientMobile: String!
    recipientAlternateMobile: String
    addressType: AddressType
  }

  input AddressUpdateInput {
    building: String
    locality: String
    city: String
    postalCode: String
    state: String
    landmark: String
    latitude: Float
    longitude: Float
    recipientName: String
    recipientMobile: String
    recipientAlternateMobile: String
    addressType: AddressType
  }

  # update address for a customer
  input AddressUpdateOneWithoutCustomerAddressInput {
    create: AddressCreateInput
    delete: Boolean
    where: AddressWhereUniqueInput
    update: AddressUpdateInput
  }
  # end of input types
`;

export default typeDefs;
