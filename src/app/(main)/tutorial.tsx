import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import IconBack from '~/assets/icons/IconBack'
import IconSetting from '~/assets/icons/IconSetting'
import Footer from '@/components/Footer'
import { useRouter } from 'expo-router'
import LogoTutorial from '~/assets/icons/LogoTutorial'
import ModalSetting from '@/modal/ModalSetting'
import { useVideoPlayer, VideoView } from 'expo-video';
import IconButtonFlipCard from '~/assets/icons/IconButtonFlipCard'
import IconButtonFindColor from '~/assets/icons/IconButtonFindColor'
import { useImageCache } from '@/context/ImageCacheContext'
import AnimatedComponent from '@/components/AnimatedComponent'
import ButtonSound from '@/components/ButtonSound'
import soundManager from '@/utils/soundManager'
import sound from '@/constants/sound'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'

export default function Tutorial() {
  const router = useRouter()
  const [modalSetting, setModalSetting] = useState(false)
  const [status, setStatus] = useState(1)
  const [showContent, setShowContent] = useState(false)
  const { getCachedImage } = useImageCache()
  const backgroundSound = useSelector((state: RootState) => state.sound.backgroundSound)

  useEffect(() => {
    // Hiển thị content sau khi component mount
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (backgroundSound) {
      const stopSound = async () => {
        await soundManager.stopBackgroundSound()
      }
      stopSound()

      return () => {
        soundManager.playBackgroundSound(sound.bgSound)
      }
    }
  }, []);

  const handleChangeVideo = (newStatus: number) => {
    setStatus(newStatus);
  };

  const videoSource = status === 0
    ? 'https://res.cloudinary.com/dks2uuwb6/video/upload/v1755528482/Screen_Recording_2025-08-18_at_21.46.03_ifxcri.mov'
    : 'https://res.cloudinary.com/dks2uuwb6/video/upload/v1755528489/Screen_Recording_2025-08-18_at_21.45.00_o7uben.mov';

  const player = useVideoPlayer({ uri: videoSource }, (player) => {
    player.loop = true;
  });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle="light-content" />
      <ImageBackground source={getCachedImage('bgTutorial')} resizeMode="cover" className="h-full">
        <View className="h-full">
          <View className="items-center justify-center mt-20">
            {/* Logo Tutorial - từ trên xuống */}
            <AnimatedComponent
              animation="slideInDown"
              duration={800}
              delay={showContent ? 300 : 0}
            >
              <LogoTutorial />
            </AnimatedComponent>
            
            {/* Khối Video và Button - zoom in */}
            <AnimatedComponent
              animation="zoomIn"
              duration={800}
              delay={showContent ? 600 : 0}
            >
              <ImageBackground
                source={getCachedImage('bgModal')}
                resizeMode="cover"
                style={styles.container}
              >
                <View className="items-center" style={{ marginTop: 30 }}>
                  <VideoView
                    style={styles.video}
                    player={player}
                    allowsFullscreen
                    allowsPictureInPicture
                  />
                </View>
              </ImageBackground>
              <View style={styles.containerButton}>
                <ButtonSound onPress={() => handleChangeVideo(1)}>
                  <IconButtonFlipCard />
                </ButtonSound>
                <ButtonSound onPress={() => handleChangeVideo(0)}>
                  <IconButtonFindColor />
                </ButtonSound>
              </View>
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
          
          <ModalSetting onClose={() => setModalSetting(false)} visible={modalSetting} />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 345,
    height: 256,
    marginTop: 110,
  },
  labelRadioItem: {
    fontFamily: 'SVN-ToySans',
    fontSize: 32,
    color: '#5C4229',
  },
  iconRadio: {
    marginRight: 10,
  },
  video: {
    borderWidth: 5,
    borderColor: 'white',
    height: 200,
    borderRadius: 40,
    width: Dimensions.get('window').width - 120,
  },
  containerButton: {
    flexDirection: 'row',
    columnGap: 10,
    marginTop: 20,
  },
})
