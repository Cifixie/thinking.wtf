import React from "react";
import ReactMarkdown from "react-markdown";
import Page from "../layouts/page";

const BlogPostTemplate = props => {
  const blogPost = props.data.contentfulBlogPost;

  return (
    <Page>
      <h1>{blogPost.title}</h1>
      <ReactMarkdown source={blogPost.body.body} />
      <img
        alt={blogPost.hero.title}
        title={blogPost.hero.description}
        srcSet={blogPost.hero.sizes.srcSet}
        src={blogPost.hero.sizes.tracedSVG}
      />
    </Page>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      hero {
        title
        description
        sizes {
          tracedSVG
          src
          srcSet
        }
      }
      body {
        body
      }
      publishedAt
    }
  }
`;

export default BlogPostTemplate;
