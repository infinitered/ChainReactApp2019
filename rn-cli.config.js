module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer")
  },
  getSourceExts() {
    return ["ts", "tsx"]
  },
  getAssetExts() {
    return ["obj", "mtl", "JPG", "vrx", "hdr"]
  },
}
