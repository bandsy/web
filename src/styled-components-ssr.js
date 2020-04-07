import { h } from "preact";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

let wrap;

// For SSR only: wrap the app to collect and append styles
if (process.env.SSR) {
  wrap = App => {
    const sheet = new ServerStyleSheet();

    const StyleTags = () => sheet.getStyleElement();

    return props => [
      <StyleSheetManager sheet={sheet.instance}>
        <App {...props} />
      </StyleSheetManager>,
      <StyleTags />
    ];
  };
} else {
  wrap = x => x;
}

export default wrap;
