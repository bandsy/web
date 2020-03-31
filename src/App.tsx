import { h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";
import { ThemeProvider } from "styled-components";
import { GridThemeProvider } from "styled-bootstrap-grid";
import Home from "./routes/home";
import Fonts from "./styles/Fonts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require("preact/debug");
}

const theme = {
  ultramarine: "#181240",
  marine: "#211859",
  lightgrey: "#888695",
  grey: "#323d3e",
  pink: "#d98289",
  darkpink: "#d96277",
  dirtywhite: "#eeeeee",
  white: "#ffffff"
};

const gridTheme = {
  breakpoints: {
    xxl: 1400
  },
  container: {
    maxWidth: {
      xl: 1478
    }
  }
};

const Routes = () => {
  let currentUrl: string;
  const handleRoute = (e: RouterOnChangeArgs) => {
    currentUrl = e.url;
  };

  return (
    <div id="app">
      <Fonts />
      <Router onChange={handleRoute}>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* 
      // @ts-ignore */}
      <GridThemeProvider gridTheme={gridTheme}>
        {/* 
      // @ts-ignore */}
        <Routes />
      </GridThemeProvider>
    </ThemeProvider>
  );
};

export default App;
