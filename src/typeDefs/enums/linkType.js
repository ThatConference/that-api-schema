import { mergeTypeDefs } from '@graphql-tools/merge';

const linkTypeEnum = `
  enum LinkType {
    "BeReal."
    BEREAL
    "Blog"
    BLOG
    "DEV To"
    DEV_TO
    "Dribbble"
    DRIBBBLE
    "Facebook"
    FACEBOOK
    "GitHub"
    GITHUB
    "Instagram"
    INSTAGRAM
    "LinkedIn"
    LINKEDIN
    "Mastodon"
    MASTODON
    "Medium"
    MEDIUM
    "Reddit"
    REDDIT
    "Snapchat"
    SNAPCHAT
    "Stack Overflow"
    STACK_OVERFLOW
    "Telegram"
    TELEGRAM
    "TIKTOK"
    TIKTOK
    "Twitch"
    TWITCH
    "Twitter"
    TWITTER
    "VERO"
    VERO
    "Vlog"
    VLOG
    "WhatsApp"
    WHATSAPP
    "Website"
    WEBSITE
    "You Tube"
    YOUTUBE
  }
`;

export default mergeTypeDefs([linkTypeEnum]);
