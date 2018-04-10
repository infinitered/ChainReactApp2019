export const presets = {
  rideShare: require("./Car.png"),
  massTransit: require("./Lightrail.png"),
}

export type TravelOptionPresets = keyof typeof presets
