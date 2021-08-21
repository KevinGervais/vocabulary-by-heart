import { Languages, Say } from "@/languages/model"
import { BookmarkItem, DiapositiveSettings, IdMap, NotchPosition, SelectedCategory, VocabularyCategory, VocabularyItem } from "@/model"
import { AllColors } from "@/styles/model"
import { PageNames } from "@/routes/model"
import { Action } from "redux"


export interface ReduxState {
  notchPosition: NotchPosition
  themeColor: keyof AllColors
  selectedLanguage: Languages
  say: Say
  page: PageNames
  isAdmin: boolean
  selectedCategory?: SelectedCategory
  vocabularyCategoryList: VocabularyCategory[]
  vocabularyCategoryMap: IdMap<VocabularyCategory>
  selectedVocabularyItem?: VocabularyItem
  diapositiveSettings?: DiapositiveSettings
  bookmarks: BookmarkItem[]
  isDark: boolean

}

export interface SetAction extends Action {
  data: Partial<ReduxState>
}
