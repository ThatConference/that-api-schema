import { mergeTypeDefs } from '@graphql-tools/merge';

const productTypeEnum = `
  enum ProductType {
    TICKET
    MEMBERSHIP
    PARTNERSHIP
    FOOD
    COUPON
    TRAINING
    FAMILY
  }
`;

export default mergeTypeDefs([productTypeEnum]);
