import { spacing } from "../../../../theme/spacing"
import { palette } from "../../../../theme/palette"

/**
 * All text will start off looking like this.
 */
const BASE_STYLES: any = {
  root: {
    backgroundColor: palette.portGore,
  },
  timeWrapper: {
    padding: spacing.large,
    borderBottomWidth: 1,
    borderBottomColor: palette.white,
    flexDirection: "row",
  },
  track: {
    width: 100,
    color: palette.shamrock,
  },
  time: {
    color: palette.shamrock,
  },
  contentWrapper: {
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.large * 2,
    flexDirection: "row",
  },
  imageWrapper: {
    width: 62,
    marginRight: spacing.large,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: 62,
    height: 68,
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: "500",
    color: palette.white,
    lineHeight: 32,
  },
  speaker: {
    fontWeight: "300",
    color: palette.offWhite,
  },
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const ScheduleCellPresets = {
  default: BASE_STYLES,
  break: {
    ...BASE_STYLES,
    contentWrapper: {
      paddingHorizontal: spacing.large,
      paddingVertical: spacing.large + spacing.medium,
      flexDirection: "row",
    },
  },
  afterparty: {
    ...BASE_STYLES,
    button: {
      paddingVertical: spacing.medium,
      paddingHorizontal: spacing.large + spacing.medium,
      width: 160,
      borderRadius: 0,
      marginTop: spacing.large + spacing.medium,
    },
    buttonText: {
      fontSize: 14,
    },
  },
}

/**
 * A list of preset names.
 */
export type ScheduleCellPresetNames = keyof typeof ScheduleCellPresets
