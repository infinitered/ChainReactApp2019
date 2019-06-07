import I18n from "i18n-js"
import * as RNLocalize from "react-native-localize"

const en = require("./locales/en.json")
const ja = require("./locales/ja.json")

const locales = RNLocalize.getLocales()

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag
}

I18n.fallbacks = true
I18n.translations = {
  en,
  ja,
}

export default I18n
