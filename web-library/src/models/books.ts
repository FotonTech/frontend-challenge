
export interface Book {
  title: string
  subtitle: string
  authors: string
  description: string
  image: string
  id: string
}

export interface Books {
  totalItems: number
  items: Book[]
}
