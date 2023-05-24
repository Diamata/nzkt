export interface ISlide {
  id: number;
  title: string;
  desc: string;
  params: string;
  url: string;
}

export interface INews {
  id: number;
  img: string;
  title: string;
  link: string;
}

export interface IMenuItem {
  id: number;
  name: string;
  link?: string;
  children?: IMenuItem[];
}