export interface BookData {
  volumeInfo: {
    id: number;
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    pageCount: number;
    imageLinks: {
      thumbnail: string;
    }
  }
}