const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const loadBlogPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.map(({ node: { slug } }) => {
        createPage({
          path: `/blog/${slug}`,
          component: path.resolve(`./src/templates/blogPost.js`),
          context: {
            slug
          }
        });
      });
      resolve();
    });
  });

  return Promise.all([loadBlogPosts]);
};
