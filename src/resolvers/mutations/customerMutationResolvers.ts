import { MutationResolvers } from "../../generated/resolvers-types";

const CustomerMutationResolvers: MutationResolvers = {
  /**
   * Authenticated customer creates an account
   */
  createCustomerAccount: async (root, args, context) => {
    try {
      const { emailId, mobileNumber, name, gender } = args.data;

      const createCustomerAccountPromise = await context.prisma.createCustomer({
        emailId,
        mobileNumber,
        name,
        gender
      });
      return {
        code: "200",
        success: true,
        message: "Customer account has been created.",
        customer: createCustomerAccountPromise
      };
    } catch (error) {
      console.error(error);
      return {
        code: "-1",
        success: false,
        message: "An error occured on the server side."
      };
    }
  },

  /**
   * Authenticated customer is authorized to update thier own account
   */
  updateCustomerAccount: async (root, args, context) => {
    try {
      const { id, emailId, mobileNumber, name, gender, address } = args.data;

      const updateCustomerAccountPromise = await context.prisma.updateCustomer({
        where: {
          id
        },
        data: {
          addresses: address
            ? {
                create: address.create,
                delete: address.delete ? address.where : null,
                update: address.update
                  ? {
                      where: address.where,
                      data: address.update
                    }
                  : null
              }
            : null,
          emailId,
          mobileNumber,
          name,
          gender
        }
      });
      return {
        code: "200",
        success: true,
        message: "Customer account has been updated.",
        customer: updateCustomerAccountPromise
      };
    } catch (error) {
      console.error(error);
      return {
        code: "-1",
        success: false,
        message: "An error occured on the server side."
      };
    }
  }
};

export default CustomerMutationResolvers;
