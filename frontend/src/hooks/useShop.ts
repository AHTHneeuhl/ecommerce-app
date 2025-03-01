import { useContext } from "react";
import { ShopContext } from "../context";

const useShop = () => {
  const { products, currency, deliveryFee } = useContext(ShopContext);

  return { products, currency, deliveryFee };
};

export default useShop;
