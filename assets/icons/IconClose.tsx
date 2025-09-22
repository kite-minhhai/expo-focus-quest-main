import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IconClose = (props: SvgProps) => (
  <Svg
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#D4FF0B"
        d="M0 12C0 5.373 5.373 0 12 0h16c6.627 0 12 5.373 12 12v16c0 6.627-5.373 12-12 12H12C5.373 40 0 34.627 0 28V12Z"
      />
      <Path
        stroke="#212B36"
        strokeWidth={2}
        d="M12 1h16c6.075 0 11 4.925 11 11v16c0 6.075-4.925 11-11 11H12C5.925 39 1 34.075 1 28V12C1 5.925 5.925 1 12 1Z"
      />
      <Path
        fill="#212B36"
        fillRule="evenodd"
        d="m20 21.414 5.657 5.657a1 1 0 1 0 1.414-1.414L21.414 20l5.657-5.657a1 1 0 0 0-1.414-1.414L20 18.586l-5.657-5.657a1 1 0 0 0-1.414 1.414L18.585 20l-5.656 5.657a1 1 0 0 0 1.414 1.414L20 21.414Z"
        clipRule="evenodd"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default IconClose
