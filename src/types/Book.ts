export default interface Book {
    id: string
    imageLinks: { thumbnail: string }
    title: string
    subtitle: string
    authors: string[]
    description: string
}