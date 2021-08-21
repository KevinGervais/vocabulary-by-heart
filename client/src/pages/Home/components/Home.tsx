import { ReduxState } from "@/redux/model"
import React from "react"
import { connect, ConnectedProps } from "react-redux"
import RightArrowIcon from "@/images/rightArrow"
import SaveIcon from "@/images/save"
import CloseIcon from "@/images/close"
import Tooltip from "react-tooltip"
import PlusIcon from "@/images/plus"

import { HomeState } from "../model"
import { createVocabularyCategory, goToCategory, goToBookmarks } from "../functions"

import { HomeStyled } from "./HomeStyled"
import { VocabularyCategory } from "./VocabularyCategory"

export class HomeClass extends React.Component<ConnectedProps<typeof connector>, HomeState> {
  constructor(props: HomeClass["props"]) {
    super(props)
    this.state = {
      newCategoryTitle: "",
      isCreatingCategory: false,
      _idMap: {}

    }
  }

  render(): JSX.Element {
    const { vocabularyCategoryList, say, bookmarks, vocabularyCategoryMap, isAdmin } = this.props
    const { isCreatingCategory, newCategoryTitle, _idMap } = this.state
    return (
      <HomeStyled>
        {!isCreatingCategory && isAdmin && (
          <div className="add-button" onClick={() => this.setState({ isCreatingCategory: true })}>
            <PlusIcon />
          </div>
        )}
        {isCreatingCategory && isAdmin && (
          <div className="input">
            <input
              placeholder={say.categoryPlacehoder}
              value={newCategoryTitle}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => this.setState({ newCategoryTitle: evt.target.value })}
            />
            <Tooltip effect="solid" place="bottom" />


            <SaveIcon
              data-tip={say.save}
              onClick={() => createVocabularyCategory(newCategoryTitle, () => this.setState({ newCategoryTitle: "" }))}
            />
            <CloseIcon data-tip={say.cancel} onClick={() => this.setState({ newCategoryTitle: "", isCreatingCategory: false })} />
          </div>
        )}
        <div className="category-list">
          {bookmarks.length !== 0 && (
            <VocabularyCategory
              _idMap={_idMap}
              isBookmarks
              onClick={() => goToBookmarks()}
            />
          )}
          {vocabularyCategoryList.map(category => (
            <VocabularyCategory
              key={category._id}
              category={category}
              _idMap={_idMap}
              setHomeState={data => this.setState(data as any)}
            />
          ))}
        </div>
        {Object.values(_idMap).includes(true) && (
          <div className="right-icon" onClick={() => goToCategory(_idMap)}>
            {Object.keys(_idMap).reduce((count, _id) => (
              _idMap[_id] ? count + vocabularyCategoryMap[_id]!.items.length : count

            ), 0)}
            <RightArrowIcon />
          </div>
        )}
      </HomeStyled>
    )
  }
}
const connector = connect((state: ReduxState) => ({
  say: state.say,
  isAdmin: state.isAdmin,
  vocabularyCategoryList: state.vocabularyCategoryList,
  vocabularyCategoryMap: state.vocabularyCategoryMap,
  bookmarks: state.bookmarks
}))
export const Home = connector(HomeClass)