// eslint-disable-next-line
export const successObject = (response: any) => {
  return {
    success: true,
    status: response.status,
    data: response.data,
    headers: response.headers,
  };
};

// eslint-disable-next-line
export const errorObject = (error: any) => {
  return {
    success: false,
    // eslint-disable-next-line
    error: error.request._response,
    status: error.request.status,
  };
};

export interface BooksModel {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeModel;
  saleInfo: SaleInfo;
}

interface VolumeModel {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifiers[];
  readingModes: {
    text: boolean;
    image: boolean;
  };
  pageCount: string;
  printType: string;
  categories: string[];
  maturityRating: string;
  allowAnonLogging: string;
  contentVersion: string;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

interface IndustryIdentifiers {
  type: string;
  identifier: string;
}

interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice: {
    amount: number;
    currencyCode: string;
  };
  retailPrice: {
    amount: string;
    currencyCode: string;
  };
  buyLink: string;
  offers: Offers[];
}

interface Offers {
  finskyOfferType: number;
  listPrice: {
    amountInMicros: number;
    currencyCode: string;
  };
  retailPrice: {
    amountInMicros: number;
    currencyCode: string;
  };
  giftable: boolean;
}
