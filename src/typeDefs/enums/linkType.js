import { mergeTypeDefs } from '@graphql-tools/merge';

const linkTypeEnum = `
  enum LinkType {
    "LinkedIn"
    LINKEDIN
    "GitHub"
    GITHUB
    "You Tube"
    YOUTUBE
    "Instagram"
    INSTAGRAM
    "Twitter"
    TWITTER
    "Facebook"
    FACEBOOK
    "Twitch"
    TWITCH
    "TIKTOK"
    TIKTOK
    "Website"
    WEBSITE
    "DEV To"
    DEV_TO
    "Dribbble"
    DRIBBBLE
    "Medium"
    MEDIUM
    "Stack Overflow"
    STACK_OVERFLOW
    "Blog"
    BLOG
    "Vlog"
    VLOG
  }
`;

export default mergeTypeDefs([linkTypeEnum]);
