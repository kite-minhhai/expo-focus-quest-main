import { Image, ImageBackground, TouchableOpacity, View, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'expo-router'
import IconBack from '~/assets/icons/IconBack'
import IconSetting from '~/assets/icons/IconSetting'
import Footer from '@/components/Footer'
import LogoComponent from '@/components/LogoConponent'
import ModalSetting from '@/modal/ModalSetting'
import { ERouteTable } from '@/constants/route-table'
import { useImageCache } from '@/context/ImageCacheContext'
import AnimatedComponent from '@/components/AnimatedComponent'
import ButtonSound from '@/components/ButtonSound'

const GameMode = () => {
  const router = useRouter()
  const [modalSetting, setModalSetting] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const { getCachedImage } = useImageCache()

  useEffect(() => {
    // Hiển thị content sau khi component mount
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle="light-content" />
      <ModalSetting onClose={() => setModalSetting(false)} visible={modalSetting} />
      <ImageBackground source={getCachedImage('bgSelectMode')} resizeMode="cover" className="h-full">
        <View className="h-full items-center justify-center">
          <View className="items-center justify-center">
            {/* Button Flip Card */}
            <AnimatedComponent
              animation="zoomIn"
              duration={800}
              delay={showContent ? 300 : 0}
            >
              <ButtonSound onPress={() => router.push(ERouteTable.LEVEL_FLIP_CARD)}>
                <Image
                  source={getCachedImage('gameFlipCard')}
                  className="h-[170px] w-[300px]"
                  resizeMode="stretch"
                />
              </ButtonSound>
            </AnimatedComponent>
            
            {/* Button Find Color */}
            <AnimatedComponent
              animation="zoomIn"
              duration={800}
              delay={showContent ? 600 : 0}
              className="mt-6"
            >
              <ButtonSound onPress={() => router.push(ERouteTable.LEVEL_FIND_COLOR)}>
                <Image
                  source={getCachedImage('gameFindColor')}
                  className="h-[170px] w-[300px]"
                  resizeMode="stretch"
                />
              </ButtonSound>
            </AnimatedComponent>
          </View>
          
          <Footer>
            <ButtonSound onPress={() => router.back()}>
              <IconBack />
            </ButtonSound>
            <ButtonSound onPress={() => setModalSetting(true)}>
              <IconSetting />
            </ButtonSound>
          </Footer>
        </View>
      </ImageBackground>
    </View>
  )
}

export default GameMode
