import { useContext } from "react";
import { ShopContext } from "../context";

const useShop = () => {
  const { ...values } = useContext(ShopContext);

  return { ...values };
};

export default useShop;
