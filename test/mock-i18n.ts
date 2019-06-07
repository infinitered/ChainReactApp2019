jest.mock("react-native-localize", () => {
  return {
    getLocales: () => [
      // you can choose / add the locales you want
      { countryCode: "US", languageTag: "en-US", languageCode: "en", isRTL: false },
      { countryCode: "JP", languageTag: "ja-JA", languageCode: "ja", isRTL: false },
    ],
  }
})
