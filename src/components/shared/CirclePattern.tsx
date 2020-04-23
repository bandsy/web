import React from "react";

const CirclePattern = () => (
  <svg>
    <pattern
      id="a"
      width="30"
      height="30"
      x="0"
      y="0"
      patternContentUnits="userSpaceOnUse"
      patternUnits="userSpaceOnUse"
    >
      <circle cx="5" cy="5" r="5" fill="#D96277"></circle>
    </pattern>
    <rect width="100%" height="100%" x="0" y="0" fill="url(#a)"></rect>
  </svg>
);

export default CirclePattern;
