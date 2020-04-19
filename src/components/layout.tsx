/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { GridThemeProvider } from "styled-bootstrap-grid";

import Fonts from "./Fonts";
import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const theme = {
    ultramarine: "#181240",
    marine: "#211859",
    lightgrey: "#888695",
    grey: "#323d3e",
    lightpink: "#faeced",
    pink: "#d98289",
    darkpink: "#d96277",
    dirtywhite: "#eeeeee",
    white: "#ffffff",
  };

  const gridTheme = {
    breakpoints: {
      xxl: 1400,
    },
    container: {
      maxWidth: {
        xl: 1478,
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Fonts />
      <GridThemeProvider gridTheme={gridTheme}>
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div>
            <main>{children}</main>
          </div>
        </>
      </GridThemeProvider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
