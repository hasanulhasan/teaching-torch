export default interface IProduct {
  _id?: string;
  title: string;
  instructors: string;
  img: string;
  price: string;
  category: string;
  seat: string;
  rating: string;
  status: boolean;
  description: string;
  features: string[];
  reviews: string[];
}