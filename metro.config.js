/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * Adding because of https://github.com/wix/react-native-navigation/issues/4757#issuecomment-468133753
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
}
