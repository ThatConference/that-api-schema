import { mergeTypeDefs } from '@graphql-tools/merge';

const bufferSocialProfileEnum = `
  enum BufferSocialProfile {
    TWITTER
    LINKEDIN
    FACEBOOK
  }
`;

export default mergeTypeDefs([bufferSocialProfileEnum]);
