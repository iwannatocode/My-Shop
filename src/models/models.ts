export interface Name {
  name: string;
  age: number;
  lock: boolean;
}

export interface Item {
  id: number;
  productName: string;
  cant: number;
  imgSrc: string;
  price: number;
  guarantee: null | { text: string };
  allImgSrc: Array<{ src: string }>;
  filterScan: Array<string>;

  //opcionales
  color?: Array<string>;
  size?: Array<number>;
  description?: string;
  rating?: number;
  notifications?: Array<{ notification: string; cant?: number }>;
  table?: {
    row: Array<{
      caracteristic: string;
      caracteristicValue: string;
    }>;
    column: Array<{
      name: string;
      field: string;
      label: string;
    }>;
  };
}
export interface ShopState {
  itemsData: Array<Item>;
  badgeCount: number;
}

export interface Cart {
  id: number;
  productName: string;
  cant: number;
  price: number;
}

export interface Payload {
  phone: number;
  name: string;
}

export interface Columns {
  name: string;
  label: string;
  field: string | ((row: any) => any);
  format?: (val: any, row: any) => any;
  sort?: (a: any, b: any, rowA: any, rowB: any) => number;
  sortable?: boolean;
  align?: 'left' | 'right' | 'center';
  classes?: string | ((row: any) => string);
}
