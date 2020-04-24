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
import { media } from "styled-bootstrap-grid";

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
    overflow: hidden;
    padding-top: 119px;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin-top: 0;
  }

  h1 {
    font-size: 38px;
    line-height: 1.23;
    font-weight: 800;
    margin-bottom: 15px;
    color: ${(x: any) => x.theme.ultramarine};

    ${media.md`
      font-size: 81px;
      line-height: 1.1;
      margin-bottom: 30px;
    `}
  }
  h2 {
    font-size: 42px;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 30px;
    color: ${(x: any) => x.theme.ultramarine};
  }
  h3 {
    font-size: 22px;
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 15px;
    color: ${(x: any) => x.theme.ultramarine};

    ${media.md`
      font-size: 26px;
      line-height: 1.15;
      margin-bottom: 30px;
    `}
    
    &.line {
      position: relative;
      padding-right: 60px;
      &::after {
        content: "";
        position: absolute;
        width: 40px;
        height: 3px;
        border-radius: 10px;
        bottom: 13px;
        transform: translate(20px);
        background-color: ${(x: any) => x.theme.ultramarine};
      }
    }
  }
  h4 {
    font-size: 18px;
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 30px;
    color: ${(x: any) => x.theme.grey};
    &.pink {
      color: ${(x: any) => x.theme.darkpink}
    }
    &.grey {
      color: ${(x: any) => x.theme.lightgrey}
    }
    &.marine {
      color: ${(x: any) => x.theme.ultramarine}
    }
    ${media.md`
      font-size: 22px;
      line-height: 1.54;
      margin-bottom: 30px;
    `}
  }
  h6 {
    font-size: 16px;
    line-height: 1.2;
    font-weight: 700;
    color: ${(x: any) => x.theme.grey};
    margin-bottom: 0;

    ${media.md`
      font-size: 18px;
    `}

    &.marine {
      color: ${(x: any) => x.theme.ultramarine};
    }
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    color: ${(x: any) => x.theme.grey};

    ${media.md`
      font-size: 18px;
      line-height: 1.5;
    `}

    a {
      color: ${(x: any) => x.theme.pink};
      &:hover {
        color: ${(x: any) => x.theme.darkpink};
      }
    }
  }
`;
