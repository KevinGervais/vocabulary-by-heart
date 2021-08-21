import { PageNames } from "@/routes/model"

export interface TitleBarState {
  readonly isFullScreen: boolean
  readonly isEditingCategory: boolean
  readonly categoryTitle: string
}
export interface TitleBarStyledProps {
  readonly page: PageNames
}