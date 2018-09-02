module.exports = {
  siteMetadata: {
    title: "Thinking.wtf",
    siteUrl: "https://thinking.wtf/",
    description: `My Diary`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "71kh0aiiimyk",
        accessToken:
          "f015819de117ef8991a212b42ac67bb614f30547b2d568fe911843761091e42b"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-125028157-1",
        head: true,
        anonymize: true,
        respectDNT: true
      }
    }
  ]
};
