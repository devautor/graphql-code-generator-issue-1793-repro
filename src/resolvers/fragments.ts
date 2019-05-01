export const fragmentAddressCustomerPrismaResponse = `
fragment AddressCustomerPrismaResponse on AddressCustomer {
  id
  building
  locality
  city
  postalCode
  state
  landmark
  latitude
  longitude
  recipientName
  recipientMobile
  recipientAlternateMobile
  addressType
    createdAt
    updatedAt
}
`;
