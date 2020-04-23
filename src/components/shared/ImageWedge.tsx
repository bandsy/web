import React from "react";

const ImageWedge = ({ image }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="821"
    height="873.93"
    viewBox="0 0 821 873.93"
  >
    <defs>
      <pattern
        id="b"
        width="1"
        height="1"
        viewBox="-0.799 354.959 816.182 868.801"
      >
        <image
          width="821"
          height="1231.5"
          preserveAspectRatio="xMidYMid slice"
          xlinkHref={image}
        ></image>
      </pattern>
    </defs>
    <path fill="url(#b)" d="M8 0h813v873.93L1 717.785 0 8a8 8 0 018-8z"></path>
  </svg>
);

export default ImageWedge;
