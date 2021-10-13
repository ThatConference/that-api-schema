import { mergeTypeDefs } from '@graphql-tools/merge';

const bufferSocialProfilesEnum = `
  enum BufferSocialProfiles {
    TWITTER
    LINKEDIN
    FACEBOOK
  }
`;

export default mergeTypeDefs([bufferSocialProfilesEnum]);
