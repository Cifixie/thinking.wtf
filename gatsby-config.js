require("dotenv").config();

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  GOOGLE_ANALYTICS_TRACKING_ID
} = process.env;

module.exports = {
  siteMetadata: {
    title: "Thinking.wtf",
    siteUrl: "https://thinking.wtf/",
    description: "My Diary"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: true
      }
    }
  ]
};
