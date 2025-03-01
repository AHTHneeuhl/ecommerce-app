import { useEffect, useState } from "react";
import { IProduct } from "../context/types";
import { useShop } from "../hooks";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSellers = () => {
  const { products } = useShop();
  const [bestSellers, setBestSellers] = useState<IProduct[]>([]);

  useEffect(() => {
    const bestProducts = products.filter((product) => product.bestseller);

    setBestSellers(bestProducts.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Shop our bestsellers—top-rated, customer-loved products. Find your
          favorites today!
        </p>
      </div>

      {/* Best Seller Items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellers.map(({ _id, name, image, price, ...props }) => (
          <ProductItem
            key={_id}
            _id={_id}
            image={image}
            name={name}
            price={price}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
