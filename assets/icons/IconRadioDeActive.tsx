import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"
const IconRadioDeActive = (props: SvgProps) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF9800"
      d="M12.5.5C18.851.5 24 5.649 24 12s-5.149 11.5-11.5 11.5S1 18.351 1 12 6.149.5 12.5.5Z"
    />
    <Path
      stroke="#212B36"
      d="M12.5.5C18.851.5 24 5.649 24 12s-5.149 11.5-11.5 11.5S1 18.351 1 12 6.149.5 12.5.5Z"
    />
    <Circle cx={12.5} cy={12} r={7} fill="#212B36" />
  </Svg>
)
export default IconRadioDeActive
