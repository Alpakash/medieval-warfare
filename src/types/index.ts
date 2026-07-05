export interface Item {
  index: number;
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  imageUrl: string;
  inCart: number;
}

export interface UserState {
  id: number;
  name: string;
  login: string;
  balance: number;
  cartBalance: number;
  bought: boolean;
}

export interface TotalPriceState {
  amount: number;
}

export interface DialogBoxState {
  show: boolean;
}

export interface RootState {
  items: Item[];
  user: UserState;
  dialogBox: DialogBoxState;
  totalPrice: TotalPriceState;
  buy: Item[];
}
