import { Image, ImageBackground, StatusBar, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'expo-router'
import IconStart from '~/assets/icons/IconStart'
import IconAchievement from '~/assets/icons/IconAchievement'
import IconTutorial from '~/assets/icons/IconTutorial'
import IconSetting from '~/assets/icons/IconSetting'
import LogoComponent from '@/components/LogoConponent'
import ModalSetting from '@/modal/ModalSetting'
import { useImageCache } from '@/context/ImageCacheContext'
import { ERouteTable } from '@/constants/route-table'
import AnimatedComponent from '@/components/AnimatedComponent'
import ButtonSound from '@/components/ButtonSound'

const SplashScreen = () => {
  const { getCachedImage } = useImageCache()
  const router = useRouter()
  const [modalSetting, setModalSetting] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Hiển thị content sau khi component mount
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const onStart = async () => {
    setShowContent(false)
    setTimeout(() => {
      router.push(ERouteTable.GAME_MODE)
    }, 300)
  }

  const onAchievement = async () => {
    setShowContent(false)
    setTimeout(() => {
      router.push(ERouteTable.ACHIEVEMENT)
    }, 300)
  }

  const onTutorial = async () => {
    setShowContent(false)
    setTimeout(() => {
      router.push(ERouteTable.TUTORIAL)
    }, 300)
  }

  return (
    <View className="flex-1">
      <StatusBar translucent backgroundColor={'transparent'} barStyle="light-content" />
      <ImageBackground source={getCachedImage('bgHome')} resizeMode="cover" className="h-full">
        <View className="h-full flex-1 justify-end mb-10">
          <View className="flex items-center">
            {/* Button Start */}
            <AnimatedComponent animation="zoomIn" duration={800} delay={showContent ? 300 : 0}>
              <ButtonSound onPress={onStart}>
                <IconStart />
              </ButtonSound>
            </AnimatedComponent>

            {/* Button Achievement */}
            <AnimatedComponent
              animation="zoomIn"
              duration={800}
              delay={showContent ? 600 : 0}
              className="my-4"
            >
              <ButtonSound onPress={onAchievement}>
                <IconAchievement />
              </ButtonSound>
            </AnimatedComponent>

            {/* Button Tutorial */}
            <AnimatedComponent animation="zoomIn" duration={800} delay={showContent ? 900 : 0}>
              <ButtonSound onPress={onTutorial}>
                <IconTutorial />
              </ButtonSound>
            </AnimatedComponent>

            {/* Button Setting */}
            <AnimatedComponent
              animation="zoomIn"
              duration={800}
              delay={showContent ? 1200 : 0}
              className="mt-8"
            >
              <ButtonSound onPress={() => setModalSetting(true)}>
                <IconSetting />
              </ButtonSound>
            </AnimatedComponent>
          </View>
          <ModalSetting onClose={() => setModalSetting(false)} visible={modalSetting} />
        </View>
      </ImageBackground>
    </View>
  )
}

export default SplashScreen
