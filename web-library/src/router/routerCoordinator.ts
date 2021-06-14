import { History } from "history"

export const goBack = (history: History) => {
  history.goBack()
}

export const goToPage = (history: History, path: string) => {
  history.push(path)
}
