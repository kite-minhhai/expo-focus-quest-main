import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IconBackModal = (props: SvgProps) => (
  <Svg
    width={51}
    height={50}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#D4FF0B"
        d="M.5 16c0-8.837 7.163-16 16-16h16c8.837 0 16 7.163 16 16v16c0 8.837-7.163 16-16 16h-16c-8.837 0-16-7.163-16-16V16Z"
      />
      <Path
        stroke="#212B36"
        strokeWidth={2}
        d="M16.5 1h16c8.284 0 15 6.716 15 15v16c0 8.284-6.716 15-15 15h-16c-8.284 0-15-6.716-15-15V16c0-8.284 6.716-15 15-15Z"
      />
      <Path
        fill="#212B36"
        d="M30.9 10.667h-3.467c-4.266 0-6.933 2.666-6.933 6.933V23h8.333c.547 0 1 .453 1 1 0 .547-.453 1-1 1H20.5v5.4c0 4.267 2.667 6.933 6.933 6.933h3.454c4.266 0 6.933-2.666 6.933-6.933V17.6c.013-4.267-2.653-6.933-6.92-6.933ZM14.58 23l2.76-2.76a.99.99 0 0 0 .293-.707.968.968 0 0 0-.293-.706 1.006 1.006 0 0 0-1.413 0l-4.467 4.466a1.006 1.006 0 0 0 0 1.414l4.467 4.466a1.006 1.006 0 0 0 1.413 0 1.006 1.006 0 0 0 0-1.413L14.58 25h5.92v-2h-5.92Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default IconBackModal
