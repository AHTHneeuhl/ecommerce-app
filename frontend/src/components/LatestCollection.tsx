import { useEffect, useState } from "react";
import { IProduct } from "../context/types";
import { useShop } from "../hooks";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useShop();

  const [latestProducts, setLatestProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore our curated collections—stylish, unique finds for every taste
          and occasion. Shop now!
        </p>
      </div>
      {/* Render Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map(({ _id, name, image, price, ...props }) => (
          <ProductItem
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

export default LatestCollection;
