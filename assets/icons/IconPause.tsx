import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IconPause = (props: SvgProps) => (
  <Svg
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#F6FFCC"
        d="M0 16C0 7.163 7.163 0 16 0h16c8.837 0 16 7.163 16 16v16c0 8.837-7.163 16-16 16H16C7.163 48 0 40.837 0 32V16Z"
      />
      <Path
        stroke="#212B36"
        strokeWidth={2}
        d="M16 1h16c8.284 0 15 6.716 15 15v16c0 8.284-6.716 15-15 15H16C7.716 47 1 40.284 1 32V16C1 7.716 7.716 1 16 1Z"
      />
      <Path
        fill="#212B36"
        d="M22.2 33.48V14.52c0-1.8-.76-2.52-2.68-2.52h-4.84c-1.92 0-2.68.72-2.68 2.52v18.96c0 1.8.76 2.52 2.68 2.52h4.84c1.92 0 2.68-.72 2.68-2.52ZM36 33.48V14.52c0-1.8-.76-2.52-2.68-2.52h-4.84c-1.907 0-2.68.72-2.68 2.52v18.96c0 1.8.76 2.52 2.68 2.52h4.84c1.92 0 2.68-.72 2.68-2.52Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default IconPause
