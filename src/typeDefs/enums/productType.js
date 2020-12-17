import { mergeTypeDefs } from '@graphql-tools/merge';

const productTypeEnum = `
  enum ProductType {
    TICKET
    MEMBERSHIP
    PARTNERSHIP
    FOOD
  }
`;

export default mergeTypeDefs(productTypeEnum);
