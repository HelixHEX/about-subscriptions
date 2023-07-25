import * as React from "react"
const UmbrellaSVG = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        fillRule="evenodd"
        d="M0 0c0 55.228 44.772 100 100 100C44.772 100 0 144.772 0 200h12c0-48.601 39.399-88 88-88s88 39.399 88 88h12c0-55.228-44.772-100-100-100 55.228 0 100-44.772 100-100h-12c0 48.601-39.399 88-88 88S12 48.601 12 0H0Zm24 0c0 41.974 34.026 76 76 76s76-34.026 76-76h-12c0 35.346-28.654 64-64 64-35.346 0-64-28.654-64-64H24Zm24 0c0 28.719 23.281 52 52 52s52-23.281 52-52h-12c0 22.091-17.909 40-40 40S60 22.091 60 0H48Zm52 124c41.974 0 76 34.026 76 76h-12c0-35.346-28.654-64-64-64-35.346 0-64 28.654-64 64H24c0-41.974 34.026-76 76-76Zm0 24c28.719 0 52 23.281 52 52h-12c0-22.091-17.909-40-40-40s-40 17.909-40 40H48c0-28.719 23.281-52 52-52Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={100}
        x2={100}
        y1={0}
        y2={200}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BF9548" />
        <stop offset={1} stopColor="#BF9548" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h200v200H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default UmbrellaSVG
