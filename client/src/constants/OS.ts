
export type OSType = "windows" | "mac" | "linux" | "android" | "ios"
function getOS(): OSType {
  const userAgent = window.navigator.userAgent
  const platform = window.navigator.platform
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"]
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"]
  const iosPlatforms = ["iPhone", "iPad", "iPod"]
  if (iosPlatforms.includes(platform) || userAgent.match(/(iPad)/)) {
    return "ios"
  } else if (macosPlatforms.includes(platform)) {
    if (navigator.maxTouchPoints > 1) {
      return "ios"
    } else {
      return "mac"
    }
  } else if (windowsPlatforms.includes(platform)) {
    return "windows"
  } else if (/Android/.test(userAgent)) {
    return "android"
  } else if (/Linux/.test(platform)) {
    return "linux"
  } else {
    return "ios"
  }
  // if (window.cordova && os !== "ios" && os !== "android") {
  //   os = "ios"
  // }
}
export const OS: OSType = getOS()