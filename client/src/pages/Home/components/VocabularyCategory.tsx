import { Toggle } from "@/components"
import { setReduxState, useReduxState } from "@/redux"
import React from "react"
import BookmarkActiveIcon from "@/images/bookmarkActive"

import { VocabularyCategoryProps } from "../model"

import { VocabularyCategoryStyled } from "./VocabularyCategoryStyled"

export function VocabularyCategory({ category, _idMap, setHomeState, isBookmarks, onClick }: VocabularyCategoryProps): JSX.Element {
  const { selectedLanguage, say } = useReduxState(state => ({
    selectedLanguage: state.selectedLanguage,
    say: state.say
  }))
  return (
    <VocabularyCategoryStyled
      onClick={() => onClick ? onClick() : setReduxState({ selectedCategory: category, page: "category" })}
    >
      {category && <Toggle active={_idMap[category._id]} onChange={(evt: React.MouseEvent<HTMLDivElement>) => {
        evt.stopPropagation()
        if (setHomeState) {
          setHomeState({ _idMap: { ..._idMap, [category!._id]: !_idMap[category!._id] } })
        }
      }} />}
      <div className="vertical-box">
        <h1>
          {isBookmarks ? say.bookmarks : category!.title[selectedLanguage] || say.category}
          {isBookmarks && <BookmarkActiveIcon />}
        </h1>
        {category && (
          <div className="card-list">
            {category.items.slice(0, 3).map(item => (
              <div className="card-item">
                {item.languageItems.ar.title.split("،")[0].split("+")[0].split(" ")[0]}
              </div>
            ))}
            <div className="card-item">
              {category.items.length}
            </div>
          </div>
        )}
      </div>
    </VocabularyCategoryStyled>
  )
}