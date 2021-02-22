import { mergeTypeDefs } from '@graphql-tools/merge';

const productTypeEnum = `
  enum ProductType {
    TICKET
    MEMBERSHIP
    PARTNERSHIP
    FOOD
    COUPON
  }
`;

export default mergeTypeDefs([productTypeEnum]);
