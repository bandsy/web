import { createGlobalStyle } from "styled-components";

import RalewayRegularEot from "../fonts/Raleway-Regular.eot";
import RalewayRegularTtf from "../fonts/Raleway-Regular.ttf";
import RalewayRegularWoff from "../fonts/Raleway-Regular.woff";
import RalewayRegularWoff2 from "../fonts/Raleway-Regular.woff2";

import RalewayBoldEot from "../fonts/Raleway-Regular.eot";
import RalewayBoldTtf from "../fonts/Raleway-Bold.ttf";
import RalewayBoldWoff from "../fonts/Raleway-Bold.woff";
import RalewayBoldWoff2 from "../fonts/Raleway-Bold.woff2";

import RalewayExtraBoldEot from "../fonts/Raleway-Regular.eot";
import RalewayExtraBoldTtf from "../fonts/Raleway-ExtraBold.ttf";
import RalewayExtraBoldWoff from "../fonts/Raleway-ExtraBold.woff";
import RalewayExtraBoldWoff2 from "../fonts/Raleway-ExtraBold.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: "Raleway";
    src: url(${RalewayRegularEot});
    src: url("${RalewayRegularEot}?#iefix") format("embedded-opentype"),
      url(${RalewayRegularWoff2}) format("woff2"),
      url(${RalewayRegularWoff}) format("woff"),
      url(${RalewayRegularTtf}) format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "Raleway";
    src: url(${RalewayBoldEot});
    src: url("${RalewayBoldEot}?#iefix") format("embedded-opentype"),
      url(${RalewayBoldWoff2}) format("woff2"),
      url(${RalewayBoldWoff}) format("woff"),
      url(${RalewayBoldTtf}) format("truetype");
    font-weight: 700;
  }

  @font-face {
    font-family: "Raleway";
    src: url(${RalewayExtraBoldEot});
    src: url("${RalewayExtraBoldEot}?#iefix") format("embedded-opentype"),
      url(${RalewayExtraBoldWoff2}) format("woff2"),
      url(${RalewayExtraBoldWoff}) format("woff"),
      url(${RalewayExtraBoldTtf}) format("truetype");
    font-weight: 800;
  }

  body {
    margin: 0;
    font-family: "Raleway", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  main {
    overflow-x: hidden;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin-top: 0;
  }

  h1 {
    font-size: 81px;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 30px;
    color: ${(x: any) => x.theme.ultramarine};
  }
  h2 {
    font-size: 42px;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 30px;
    color: ${(x: any) => x.theme.ultramarine};
  }
  h3 {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 30px;
    color: ${(x: any) => x.theme.ultramarine};
    
    &.line {
      position: relative;
      padding-right: 60px;
      &::after {
        content: "";
        position: absolute;
        width: 40px;
        height: 3px;
        border-radius: 10px;
        top: 50%;
        transform: translate(20px, -50%);
        background-color: ${(x: any) => x.theme.ultramarine};
      }
    }
  }
  h4 {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.54;
    color: ${(x: any) => x.theme.grey};
    &.pink {
      color: ${(x: any) => x.theme.darkpink}
    }
  }
  p {
    font-size: 18px;
    line-height: 1.5;
    color: ${(x: any) => x.theme.grey};

    a {
      color: ${(x: any) => x.theme.pink};
      &:hover {
        color: ${(x: any) => x.theme.darkpink};
      }
    }
  }
`;
