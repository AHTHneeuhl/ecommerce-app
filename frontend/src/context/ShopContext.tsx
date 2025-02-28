import { createContext } from "react";
import { products } from "../assets/assets";

import { IProduct } from "./types";

interface ShopContextProps {
  children: React.ReactNode;
}

type TShopContext = {
  products: IProduct[];
};

export const ShopContext = createContext<TShopContext>({ products: [] });

const ShopContextProvider = (props: ShopContextProps) => {
  const currency = "$";
  const deliveryFee = 10;

  const value = {
    products,
    currency,
    deliveryFee,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
