export type BookType = {
   name: String;
   id: String;
   description?: String;
   author: String;
   categories: String | String[];
   smallThumbnail?: string;
   thumbnail?: string;
   pageCount: number;
};

export type BookBeingReadType = {
   book: BookType;
   currentChapter: number;
   currentPage: number;
};
