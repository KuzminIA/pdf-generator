export type HeaderModel = {
  type: 'header';
  size: 'h1' | 'h2';
  title: string;
}

export type FontStyle = 'bold' | 'italic';

export type TextModel = {
  type: 'text';
  text: string;
  fontStyle: FontStyle[];
}


export type ImageModel = {
  type: 'image';
  src: string;
}

export type ListItemModel = {
  text: string;
  fontStyle: FontStyle[];
}

export type ListModel = {
  type: 'list';
  items: ListItemModel[];
}

export type TableOfContentModel = {
  type: 'tableOfContentItem'
  n: number;
  text: string;
}

export type PageSection = HeaderModel | TextModel | ImageModel | ListModel | TableOfContentModel;

export type PageModel = {
  sections: PageSection[];
}

export type DocumentModel = {
  brandName: string;
  pages: PageModel[];
}
