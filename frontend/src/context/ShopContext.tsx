import { createContext, useState } from "react";
import { products } from "../assets/assets";

import { IProduct } from "./types";

interface ShopContextProps {
  children: React.ReactNode;
}

type TShopContext = {
  products: IProduct[];
  currency: string;
  deliveryFee: number;
  search: string;
  showSearch: boolean;
  setSearch: (search: string) => void;
  setShowSearch: (show: boolean) => void;
};

export const ShopContext = createContext<TShopContext>({
  products: [],
  currency: "",
  deliveryFee: 0,
  search: "",
  setSearch: () => {},
  showSearch: true,
  setShowSearch: () => {},
});

const ShopContextProvider = (props: ShopContextProps) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,
    currency: "$",
    deliveryFee: 10,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
