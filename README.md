# Issue reproduction for type mismatch handling when using prisma client with graphql-code-generator

## Issue reported [in this repo](https://github.com/dotansimha/graphql-code-generator/issues/1793#issuecomment-488258573)

### How to reproduce

- Clone this repo
- `yarn dev`

### Error in resolvers will be shown

- Go to file `resolvers/customerWishlistResolvers.ts` (since error in this repro is thrown in customerResolvers.ts first, which has the same nature; but the reported one is easily visible here)

- Read this error in IDE:

```
Type '(root: CustomerWishlist, args: {}, context: IContext) => Promise<Customer>' is not assignable to type 'Resolver<Customer, CustomerWishlist, IContext, {}>'.
  Type '(root: CustomerWishlist, args: {}, context: IContext) => Promise<Customer>' is not assignable to type 'ResolverFn<Customer, CustomerWishlist, IContext, {}>'.
    Type 'Promise<Customer>' is not assignable to type 'Customer | Promise<Customer>'.
      Type 'Promise<import("g:/git_projs/bug_repro/graphql-code-generator-issue/src/generated/prisma-client-ts/index").Customer>' is not assignable to type 'Promise<import("g:/git_projs/bug_repro/graphql-code-generator-issue/src/generated/resolvers-types").Customer>'.
      ...
```
