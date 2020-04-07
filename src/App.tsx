import { h } from "preact";
import { Route, Router } from "preact-router";
import { ThemeProvider } from "styled-components";
import { GridThemeProvider } from "styled-bootstrap-grid";
import Home from "./routes/home";
import Fonts from "./styles/Fonts";
import Nav from "./components/Nav";

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
  lightpink: "#faeced",
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

const Routes = (): h.JSX.Element => {
  return (
    <div id="app">
      <Fonts />
      <Nav />
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
};

const App = (): h.JSX.Element => {
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
