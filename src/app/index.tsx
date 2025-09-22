import { Image, StatusBar, View } from 'react-native'
import { useEffect } from 'react'
import { router } from 'expo-router'
import { images } from '@/constants'
import { useImageCache } from '@/context/ImageCacheContext'
import { ERouteTable } from '@/constants/route-table'
import { useSelector } from 'react-redux'
import sound from '@/constants/sound'
import { RootState } from '@/redux'
import soundManager from '@/utils/soundManager'

export default function Root() {
  const { loaded } = useImageCache()
  const backgroundSound = useSelector((state: RootState) => state.sound.backgroundSound)

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => {
        router.replace(ERouteTable.HOME)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [loaded])

  useEffect(() => {
    const playSound = async () => {
      if (backgroundSound === 1) {
        await soundManager.playBackgroundSound(sound.bgSound)
      } else {
        await soundManager.stopBackgroundSound()
      }
    }
    playSound()
  }, [])

  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar translucent backgroundColor={'transparent'} barStyle="light-content" />
      <Image source={images.splash} className="w-full h-full" />
    </View>
  )
}
