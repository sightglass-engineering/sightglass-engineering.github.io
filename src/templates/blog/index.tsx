import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';
import { Header } from './header/header';
import './styles.scss';

// this prop will be injected by the GraphQL query below.
const Template = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Header author={ frontmatter.author }
              title={ frontmatter.title }
              date={ frontmatter.date }
              subtitle={ frontmatter.subtitle }/>
      <div className="section">
        <div className="container is-fluid">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={ { __html: html } }
          />
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        subtitle
      }
    }
  }
`;

export default Template;
