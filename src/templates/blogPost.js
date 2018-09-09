import React from "react";
import ReactMarkdown from "react-markdown";

class BlogPostTemplate extends React.Component {
  render() {
    const blogPost = this.props.data.contentfulBlogPost;

    return (
      <div>
        <h1>{blogPost.title}</h1>
        <ReactMarkdown source={blogPost.body.body} />
        <img
          alt={blogPost.hero.title}
          title={blogPost.hero.description}
          srcSet={blogPost.hero.sizes.srcSet}
          src={blogPost.hero.sizes.tracedSVG}
        />
      </div>
    );
  }
}

export default BlogPostTemplate;

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
