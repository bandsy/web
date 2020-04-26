/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { GridThemeProvider } from "styled-bootstrap-grid";

import Fonts from "./Fonts";
import Header from "./header";
import useDarkMode from "../hooks/useDarkMode";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useDarkMode();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const lightTheme = {
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

  const darkTheme = {
    ultramarine: "#ffffff",
    marine: "#211859",
    lightgrey: "#9A97AC",
    grey: "#EEE",
    lightpink: "#35292A",
    pink: "#d98289",
    darkpink: "#d96277",
    dirtywhite: "#222222",
    white: "#181A1A",
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
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
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
