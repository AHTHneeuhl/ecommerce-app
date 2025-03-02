import { createContext, useState } from "react";
import { toast } from "react-toastify";
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
  cartProducts: {};
  setSearch: (search: string) => void;
  setShowSearch: (show: boolean) => void;
  addToCart: (productId: string, productSize: string) => void;
  getCartCount: () => number;
};

export const ShopContext = createContext<TShopContext>({
  products: [],
  currency: "",
  deliveryFee: 0,
  search: "",
  setSearch: () => {},
  showSearch: true,
  setShowSearch: () => {},
  cartProducts: {},
  addToCart: () => {},
  getCartCount: () => 0,
});

const ShopContextProvider = (props: ShopContextProps) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartProducts, setCartProducts] = useState<any>({});

  const addToCart = async (productId: string, productSize: string) => {
    let cartData = structuredClone(cartProducts);

    if (!productSize) {
      toast.error("Please select a size");
      return;
    }

    if (cartData[productId]) {
      if (cartData[productId][productSize]) {
        cartData[productId][productSize] += 1;
      } else {
        cartData[productId][productSize] = 1;
      }
    } else {
      cartData[productId] = {};
      cartData[productId][productSize] = 1;
    }

    setCartProducts(cartData);
  };

  const getCartCount = () => {
    let cartCount = 0;

    for (const product in cartProducts) {
      for (const size in cartProducts[product]) {
        try {
          if (cartProducts[product][size]) {
            cartCount += cartProducts[product][size];
          }
        } catch (error) {}
      }
    }

    return cartCount;
  };

  const value = {
    products,
    currency: "$",
    deliveryFee: 10,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartProducts,
    addToCart,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
