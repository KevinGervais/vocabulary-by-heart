import { VocabularyCategory } from "@/model"
export interface HomeState {
  readonly newCategoryTitle: string
  readonly isCreatingCategory: boolean
  readonly _idMap: IdMap
}

export type IdMap = { [_id: string]: boolean | undefined }

export interface VocabularyCategoryProps {
  category?: VocabularyCategory
  _idMap: IdMap
  isBookmarks?: boolean
  onClick?: () => void
  setHomeState?: (obj: Partial<HomeState>) => void
}