/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';

import './layout.css';
import { Navbar } from './navbar';

const Layout = ({ children }) => (
  <StaticQuery
    query={ graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    ` }
    render={ data => (
      <>
        <Navbar/>
        <div>
          <main>{ children }</main>
          <footer>
            © { new Date().getFullYear() } Sightglass Engineering
          </footer>
        </div>
      </>
    ) }
  />
);

export default Layout;
