export const presets = {
  plane: require("./Plane.png"),
  rideShare: require("./Car.png"),
  massTransit: require("./Lightrail.png"),
}

export type TravelOptionPresets = keyof typeof presets
