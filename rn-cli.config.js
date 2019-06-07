const { getDefaultConfig } = require("metro-config")

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()

  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-typescript-transformer"),
    },
    resolver: {
      sourceExts: [...sourceExts, "ts", "tsx"],
      assetExts: [...assetExts, "obj", "mtl", "JPG", "vrx", "hdr"],
    },
  }
})()
