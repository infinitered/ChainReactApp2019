import AsyncStorage from "@react-native-community/async-storage"
import { load, loadString, save, saveString, clear, remove } from "."

// fixtures
const VALUE_OBJECT = { x: 1 }
const VALUE_STRING = JSON.stringify(VALUE_OBJECT)

beforeEach(() => {
  // @ts-ignore
  AsyncStorage.getItem.mockReturnValue(Promise.resolve(VALUE_STRING))
})

afterEach(() => jest.clearAllMocks())

test("load", async () => {
  const value = await load("something")
  expect(value).toEqual(JSON.parse(VALUE_STRING))
})

test("load exception", async () => {
  // @ts-ignore
  AsyncStorage.getItem.mockImplementation(() => {
    throw new Error("wat")
  })
  const value = await load("something")
  expect(value).toEqual(null)
})

test("loadString", async () => {
  const value = await loadString("something")
  expect(value).toEqual(VALUE_STRING)
})

test("loadString exception", async () => {
  // @ts-ignore
  AsyncStorage.getItem.mockImplementation(() => {
    throw new Error("wat")
  })
  const value = await loadString("something")
  expect(value).toEqual(null)
})

test("save", async () => {
  const value = await save("something", VALUE_OBJECT)
  expect(AsyncStorage.setItem).toHaveBeenCalledWith("something", VALUE_STRING)
  expect(value).toEqual(true)
})

test("save exception", async () => {
  // @ts-ignore
  AsyncStorage.setItem.mockImplementationOnce(() => {
    throw new Error("wat")
  })
  const value = await save("something", "value")
  expect(value).toEqual(false)
})

test("saveString", async () => {
  await saveString("something", VALUE_STRING)
  expect(AsyncStorage.setItem).toHaveBeenCalledWith("something", VALUE_STRING)
})

test("saveString exception", async () => {
  // @ts-ignore
  AsyncStorage.setItem.mockImplementationOnce(() => {
    throw new Error("wat")
  })
  const value = await saveString("something", "value")
  expect(value).toEqual(false)
})

test("remove", async () => {
  await remove("something")
  expect(AsyncStorage.removeItem).toHaveBeenCalledWith("something")
})

test("clear", async () => {
  await clear()
  expect(AsyncStorage.clear).toHaveBeenCalledWith()
})
