const num = 500

const numbers = []

for (let i = 0; i < num; i++) {
  numbers.push(i)
}

const animals = [
  "lion",
  "bobcat",
  "bulldog",
  "phoenix",
  "squirrel",
  "penguin",
  "tiger",
  "monkey",
  "goldfish",
  "mammoth",
  "megalodon",
  "rattlesnake",
  "cricket",
  "beetle",
  "scorpion",
  "tarantula",
  "alligator",
  "viper",
  "turtle",
  "toad",
  "puffin",
  "vulture",
  "goose",
  "hyena",
  "zebra",
]

const colors = [
  "aliceblue",
  "blanchedalmond",
  "cornsilk",
  "cadetblue",
  "charteuse",
  "deepskyblue",
  "firebrick",
  "gainsboro",
  "honeydew",
  "lavenderblush",
  "navajowhite",
  "oldlace",
  "peru",
  "thistle",
  "sandybrown",
  "chocolate",
  "sienna",
  "maroon",
  "plum",
  "violet",
  "magenta",
  "indigo",
  "blue",
  "navy",
]

const number = numbers[Math.floor(Math.random() * numbers.length)]
const animal = animals[Math.floor(Math.random() * animals.length)]
const color = colors[Math.floor(Math.random() * colors.length)]

export default `${color}${animal}${number}`
