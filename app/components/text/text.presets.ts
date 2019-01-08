import { TextStyle } from "react-native"
import { color, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 15,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: "600" } as TextStyle,

  /**
   * Large Titles
   */
  title: {
    ...BASE,
    fontSize: 36,
    fontWeight: "500",
    lineHeight: 45,
    color: color.palette.white,
  } as TextStyle,

  /**
   * Large headers.
   */
  header: {
    ...BASE,
    fontSize: 28,
    fontWeight: "500",
    lineHeight: 35,
    color: color.palette.white,
  } as TextStyle,

  /**
   * Body text.
   */
  body: { ...BASE, fontSize: 18, lineHeight: 32, color: color.palette.offWhite } as TextStyle,

  /**
   * Small headers.
   */
  input: {
    ...BASE,
    fontStyle: "italic",
    fontSize: 15,
    lineHeight: 18,
    color: color.palette.lightGrey,
  } as TextStyle,

  /**
   * Small headers.
   */
  subheader: { ...BASE, fontSize: 16, lineHeight: 27 } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  sectionHeader: {
    ...BASE,
    fontSize: 14,
    lineHeight: 17,
    color: color.palette.offWhite,
  } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  /**
   * labels
   */
  label: { ...BASE, fontSize: 11, color: color.palette.offWhite } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
