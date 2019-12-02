import React from "react";
import Variables from "../jss/Variables";

const HomebgSVG = props => (
  <svg width={360} height={235} viewBox="0 0 360 235" fill="none" {...props}>
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={360}
      height={235}
    >
      <path d="M360 0H0V235H360V0Z" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M190.556 158.336C78.1397 116.975 62.0697 43.0741 68.0867 11.2937V-96L458.823 -82.9357C481.595 54.7485 513.476 313.828 458.823 248.674C390.507 167.231 331.077 210.037 190.556 158.336Z"
        fill="url(#paint0_linear)"
        fillOpacity={0.25}
      />
      <path
        d="M107.167 107.996C10.2778 93.3488 -15.9815 35.3139 -17 8.12743L54.1111 -59.284L396.056 -64C418.37 -31.9125 463 34.2598 463 42.2493C463 52.2361 443.556 227.839 425.778 232.277C408 236.716 333.556 220.071 286.889 199.82C240.222 179.569 228.278 126.305 107.167 107.996Z"
        fill="url(#paint1_linear)"
        fillOpacity={0.5}
      />
      <path
        d="M84.8963 77.798C32.2513 71.8081 -14.97 30.9326 -32 11.2436V-9L368.668 -4.28573C383.014 73.9157 404.542 228.821 375.887 222.831C340.069 215.344 316.19 166.815 256.492 125.773C196.795 84.7308 150.702 85.2854 84.8963 77.798Z"
        fill="url(#paint2_linear)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1={466.321}
        y1={-24.5636}
        x2={108.91}
        y2={-32.3323}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={Variables.dark_base_color ? Variables.dark_base_color : "#ff9900"} />
        <stop offset={1} stopColor={Variables.dark_base_color_2 ? Variables.dark_base_color_2 : "#FFC400"} />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1={442.722}
        y1={22.5529}
        x2={160.016}
        y2={115.151}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={Variables.dark_base_color ? Variables.dark_base_color : "#ff9900"} />
        <stop offset={1} stopColor={Variables.dark_base_color_2 ? Variables.dark_base_color_2 : "#FFC400"} />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1={192.5}
        y1={3}
        x2={190.476}
        y2={193}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={Variables.dark_base_color ? Variables.dark_base_color : "#ff9900"} />
        <stop offset={1} stopColor={Variables.dark_base_color_2 ? Variables.dark_base_color_2 : "#FFC400"} />
      </linearGradient>
    </defs>
  </svg>
);

export default HomebgSVG;
