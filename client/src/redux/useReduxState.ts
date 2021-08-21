import { ReduxState } from "@/redux/model"
import { useSelector } from "react-redux"

export function useReduxState<Result>(callback: (state: ReduxState) => Result): Result {
  const result: Result = useSelector(callback)
  return result
}
