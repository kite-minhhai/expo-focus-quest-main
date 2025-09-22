export default {
  expo: {
    name: 'Memory Challenge',
    slug: 'app-focus-request',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/splash_icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
      [
        'expo-asset',
        {
          assets: ['./assets/splash_icon.png', './assets/images'],
        },
      ],
      [
        'expo-audio',
        {
          microphonePermission: 'Allow FOCUS QUEST to access your microphone.',
        },
      ],
      [
        'expo-video',
        {
          supportsBackgroundPlayback: true,
          supportsPictureInPicture: true,
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      eas: {
        projectId: '8d93c960-f6e4-4817-af50-77bf528eabc9',
      },
    },
    android: {
      package: 'com.kite.expomemorychallenge',
    },
    ios: {
      bundleIdentifier: 'com.kite.expomemorychallenge', // 👈 Bắt buộc!
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
  },
}
