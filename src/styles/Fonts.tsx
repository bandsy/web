import { h } from "preact";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Raleway";
    src: url("/assets/fonts/Raleway-Regular.eot");
    src: url("/assets/fonts/Raleway-Regular.eot?#iefix") format("embedded-opentype"),
      url("/assets/fonts/Raleway-Regular.woff2") format("woff2"),
      url("/assets/fonts/Raleway-Regular.woff") format("woff"),
      url("/assets/fonts/Raleway-Regular.ttf") format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "Raleway";
    src: url("/assets/fonts/Raleway-Medium.eot");
    src: url("/assets/fonts/Raleway-Medium.eot?#iefix") format("embedded-opentype"),
      url("/assets/fonts/Raleway-Medium.woff2") format("woff2"),
      url("/assets/fonts/Raleway-Medium.woff") format("woff"),
      url("/assets/fonts/Raleway-Medium.ttf") format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "Raleway";
    src: url("/assets/fonts/Raleway-Bold.eot");
    src: url("/assets/fonts/Raleway-Bold.eot?#iefix") format("embedded-opentype"),
      url("/assets/fonts/Raleway-Bold.woff2") format("woff2"),
      url("/assets/fonts/Raleway-Bold.woff") format("woff"),
      url("/assets/fonts/Raleway-Bold.ttf") format("truetype");
    font-weight: 700;
  }

  body {
    margin: 0;
    font-family: "Raleway", sans-serif;
  }
`;
