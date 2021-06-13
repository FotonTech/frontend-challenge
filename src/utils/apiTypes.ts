export type Book = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    description: string;
    pageCount: number;
    printType?: "BOOK" | "MAGAZINE" | string | null;
    imageLinks: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  saleInfo: {
    country: "BR" | string;
    saleability?: "FOR_SALE";
    isEbook: true;
    listPrice: {
      amount: number;
      currencyCode?: string;
    };
    retailPrice: {
      amount: number;
      currencyCode: string;
    };
    buyLink: string;
  };
  searchInfo: {
    textSnippet: string;
  };
};

export type BooksApiResponse = {
  kind: string;
  totalItems: number;
  items: Book[];
};
