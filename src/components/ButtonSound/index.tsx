import React, { useRef } from 'react'
import { TouchableOpacity } from 'react-native'
import { TouchableOpacityProps } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'
import soundManager from '@/utils/soundManager'
import sound from '@/constants/sound'
import * as Animatable from 'react-native-animatable'

const AnimTouchable = Animatable.createAnimatableComponent(TouchableOpacity)

export default function ButtonSound({ onPress, children, ...rest }: TouchableOpacityProps) {
  const gameSound = useSelector((state: RootState) => state.sound.gameSound)
  const touchRef = useRef<any>(null)

  const handlePress = async () => {
    if (gameSound) {
      soundManager.playSFX(sound.buttonTab)
    }

    try {
      // Smoother, more pronounced tap with slight overshoot
      await touchRef.current?.animate(
        {
          0: { scale: 1 },
          0.45: { scale: 0.88 },
          0.75: { scale: 1.04 },
          1: { scale: 1 },
        },
        260,
      )
    } catch {}

    if (onPress) {
      // @ts-ignore
      onPress()
    }
  }

  return (
    <AnimTouchable ref={touchRef} {...rest} onPress={handlePress} activeOpacity={0.85} useNativeDriver>
      {children}
    </AnimTouchable>
  )
}
