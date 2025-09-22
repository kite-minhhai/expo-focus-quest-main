import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IconLeveLock = (props: SvgProps) => (
  <Svg
    width={70}
    height={70}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#829E00"
        d="M0 24C0 10.745 10.745 0 24 0h20c13.255 0 24 10.745 24 24v20c0 13.255-10.745 24-24 24H24C10.745 68 0 57.255 0 44V24Z"
      />
      <Path
        stroke="#212B36"
        strokeWidth={2}
        d="M24 1h20c12.703 0 23 10.297 23 23v20c0 12.703-10.297 23-23 23H24C11.297 67 1 56.703 1 44V24l.008-.594c.31-12.23 10.167-22.088 22.398-22.398L24 1Z"
      />
      <Path
        fill="#212B36"
        d="M34 42.917a2.717 2.717 0 1 0 0-5.434 2.717 2.717 0 0 0 0 5.434Z"
      />
      <Path
        fill="#212B36"
        d="M44.467 29.883V27.8c0-4.5-1.084-10.467-10.467-10.467-9.383 0-10.466 5.967-10.466 10.467v2.083c-4.667.584-6.2 2.95-6.2 8.767v3.1c0 6.833 2.083 8.917 8.916 8.917h15.5c6.834 0 8.917-2.084 8.917-8.917v-3.1c0-5.817-1.534-8.183-6.2-8.767ZM34 45.233a5.04 5.04 0 0 1-5.033-5.033A5.04 5.04 0 0 1 34 35.167c2.767 0 5.033 2.266 5.033 5.033A5.029 5.029 0 0 1 34 45.233Zm-7.75-15.5h-.383V27.8c0-4.883 1.383-8.133 8.133-8.133 6.75 0 8.133 3.25 8.133 8.133v1.95H26.25v-.017Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default IconLeveLock
