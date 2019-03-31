export interface IReview {
  comment: string;
  reviewer: string;
}

export interface IImage {
  imageUrl: string;
  name: string;
  description: string;
}
export interface IProduct {
  id: number;
  name: string;
  description: string;
  slug: number;
  bestSell: boolean;
  price: number;
  reviews: IReview[];
  images?: IImage[];
}

export const productsData: IProduct[] = [
  {
    description:
      "A collection of navigational components that compose declaratively with your app",
    id: 1,
    name: "React Router",
    price: 8,
    slug: 2,
    reviews: [
      {
        comment: "Excellent! This does everything I want",
        reviewer: "Billy"
      },
      {
        comment: "The best router I've ever worked with",
        reviewer: "Sally"
      }
    ],
    bestSell: true
  },

  {
    description: "tes2",
    id: 2,
    name: "React Router",
    price: 8,
    slug: 2,
    reviews: [
      {
        comment: "Excellent! This does everything I want",
        reviewer: "Billy"
      },
      {
        comment: "The best router I've ever worked with",
        reviewer: "Sally"
      }
    ],
    bestSell: true
  },

  {
    description: "test3",
    id: 3,
    name: "React Router",
    price: 8,
    slug: 2,
    reviews: [
      {
        comment: "Excellent! This does everything I want",
        reviewer: "Billy"
      },
      {
        comment: "The best router I've ever worked with",
        reviewer: "Sally"
      }
    ],
    bestSell: true
  }
];

// export const getProducts = async (): Promise<IProduct[]> => {
//   await wait(1000);
//   return products;
// };

export const getProduct = async (id: number): Promise<IProduct | null> => {
  await wait(1000);
  const foundProducts = products.filter(customer => customer.id === id);
  return foundProducts.length === 0 ? null : foundProducts[0];
};

const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
