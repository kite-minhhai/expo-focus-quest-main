import React from 'react'
import { View, ImageProps, ViewProps, TextProps } from 'react-native'
import * as Animatable from 'react-native-animatable'

// Định nghĩa kiểu dữ liệu cho các props
interface AnimatedComponentProps {
  animation?: Animatable.Animation | 'fadeOut' | 'fadeIn' | 'slideInUp' | 'slideOutDown' | 'zoomIn' | 'zoomOut' | 'slideInDown' // Tên animation (vd: "fadeIn", "bounce", "zoomIn")
  duration?: number // Thời gian chạy animation (ms)
  delay?: number // Độ trễ (ms)
  iterationCount?: number | 'infinite' // Số lần lặp animation
  type?: 'view' | 'text' | 'image' | 'custom' // Loại component
  customComponent?: React.ComponentType<any> // Component tùy chỉnh nếu chọn type = "custom"
  children?: React.ReactNode // Nội dung bên trong
  onAnimationEnd?: () => void // Callback khi animation kết thúc
}

// Component AnimatedComponent tổng quát
const AnimatedComponent: React.FC<AnimatedComponentProps & ViewProps & TextProps & ImageProps> = ({
  animation = 'fadeIn',
  duration = 1000,
  delay = 0,
  iterationCount = 1,
  type = 'view',
  customComponent = null,
  children,
  onAnimationEnd,
  ...props
}) => {
  let Component: any

  // Chọn component phù hợp
  switch (type) {
    case 'text':
      Component = Animatable.Text
      break
    case 'image':
      Component = Animatable.Image
      break
    case 'custom':
      Component = customComponent ? Animatable.createAnimatableComponent(customComponent) : View
      break
    case 'view':
    default:
      Component = Animatable.View
  }

  // Xử lý animation tùy chỉnh
  const getAnimation = () => {
    if (animation === 'fadeOut') {
      return { from: { opacity: 1 }, to: { opacity: 0 } }
    }
    if (animation === 'fadeIn') {
      return { from: { opacity: 0 }, to: { opacity: 1 } }
    }
    if (animation === 'slideInUp') {
      return { from: { opacity: 0, translateY: 50 }, to: { opacity: 1, translateY: 0 } }
    }
    if (animation === 'slideOutDown') {
      return { from: { opacity: 1, translateY: 0 }, to: { opacity: 0, translateY: 50 } }
    }
    if (animation === 'slideInDown') {
      return { from: { opacity: 0, translateY: -50 }, to: { opacity: 1, translateY: 0 } }
    }
    if (animation === 'zoomIn') {
      return { from: { opacity: 0, scale: 0.3 }, to: { opacity: 1, scale: 1 } }
    }
    if (animation === 'zoomOut') {
      return { from: { opacity: 1, scale: 1 }, to: { opacity: 0, scale: 0.3 } }
    }
    return animation
  }

  return (
    <Component
      animation={getAnimation()}
      duration={duration}
      delay={delay}
      useNativeDriver={animation !== 'pulse' && animation !== 'flash'}
      iterationCount={iterationCount}
      easing="ease-in-out"
      onAnimationEnd={onAnimationEnd}
      {...props}
    >
      {children}
    </Component>
  )
}

export default AnimatedComponent
