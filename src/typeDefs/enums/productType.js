import { mergeTypeDefs } from '@graphql-tools/merge';

const productTypeEnum = `
  enum ProductType {
    TICKET
    MEMBERSHIP
    PARTNERSHIP
    FOOD
    COUPON
    WORKSHOP
    FAMILY
  }
`;

export default mergeTypeDefs([productTypeEnum]);
