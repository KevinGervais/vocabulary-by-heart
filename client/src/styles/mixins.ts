import { IS_DESKTOP } from "@/constants"
import { getOS } from "@/functions"
import { css } from "styled-components"

import { ShadeEffectOptions, Theme } from "./model"

export const center: any = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const clickable: any = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`

export const noSelection: any = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const getNotch = (postion: "left" | "right" | "top" | "bottom"): string => (
  getOS() === "android" ? `var(--safe-area-inset-${postion})` : `env(safe-area-inset-${postion})`
)

export const ellipsis: any = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const noScrollbar: any = css`
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }
`

export const getAppHeight = (): string => {
  if (window.innerHeight === window.screen.height) {
    return "100vh"
  } else {
    return "calc(100vh - 20px)"
  }
}

export function hexToHsla(hex: string, transparency: number): string {
  const result: RegExpExecArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex
  ) as RegExpExecArray
  let r: number = parseInt(result[1], 16)
  let g: number = parseInt(result[2], 16)
  let b: number = parseInt(result[3], 16)
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h: number = 0
  let s: number = 0
  let l: number = (max + min) / 2
  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }
  s = s * 100
  s = Math.round(s)
  l = l * 100
  l = Math.round(l)
  h = Math.round(360 * h)
  return `hsla(${h}, ${s}%, ${l}%, ${transparency})`
}


export const shadeEffect = (
  color: keyof Theme | "white",
  type: "color" | "background" | "border-color",
  options?: ShadeEffectOptions
) => {
  const { tags, isImportant, incrementation, whiteShadeType = "grey" } = options || {} as ShadeEffectOptions
  const colorType = (color || "").replace(/[0-9]/g, "")
  const colorIntensity = (color || "").replace(/[a-z]/g, "")
  const isDecreasing: boolean = Number(colorIntensity) >= 700
  let finalIncrementation: [number, number] = incrementation || [100, 200]
  if (isDecreasing) {
    finalIncrementation = finalIncrementation.map((num: number) => -num) as [number, number]
  }
  const colorHover = (
    color === "white" ?
      `${whiteShadeType}${finalIncrementation[0]}` :
      `${colorType}${Number(colorIntensity) + finalIncrementation[0]}`
  ) as keyof Theme
  const colorActive = (
    color === "white" ?
      `${whiteShadeType}${finalIncrementation[1]}` :
      `${colorType}${Number(colorIntensity) + finalIncrementation[1]}`
  ) as keyof Theme
  const tagListFinal = tags ? tags : ["&"]
  const finalTags = tagListFinal.map((tag: string) => tag === "&" ? "&" : `& ${tag}`).join(", ")
  const tagsHover = tagListFinal.map((tag: string) => tag === "&" ? "&:hover" : `&:hover ${tag}`).join(", ")
  const tagsActive = tagListFinal.map((tag: string) => tag === "&" ? "&:active" : `&:active ${tag}`).join(", ")
  const importantTag = isImportant ? " !important" : ""
  if (IS_DESKTOP) {
    return css`
    ${clickable}
      ${finalTags} {
        ${`${type}: ${color === "white" ? color : window.theme[color]}${importantTag};`}
      }
      ${tagsHover} {
        ${`${type}: ${window.theme[colorHover]}${importantTag};`}
      }
      ${tagsActive} {
        ${`${type}: ${window.theme[colorActive]}${importantTag};`}
      }
    `
  } else {
    return css`
      ${clickable}
      ${finalTags} {
        ${`${type}: ${color === "white" ? color : window.theme[color]}${importantTag};`}
      }
      ${tagsActive} {
        ${`${type}: ${window.theme[colorHover]}${importantTag};`}
      }
    `
  }
}
