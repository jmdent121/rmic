
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

export interface OrderFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productId: string;
  quantity: number;
  message: string;
}

export enum Page {
  Home = 'home',
  Products = 'products',
  Order = 'order',
  About = 'about',
  Contact = 'contact'
}
