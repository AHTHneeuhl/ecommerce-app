import { useEffect, useState } from "react";
import { useShop } from "../hooks";
import { IProduct } from "../context/types";
import Title from "./Title";
import ProductItem from "./ProductItem";

interface RelatedProductProps {
  category: string;
  subCategory: string;
}

const RelatedProducts: React.FC<RelatedProductProps> = ({
  category,
  subCategory,
}) => {
  const { products } = useShop();
  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (products.length) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (product) => category === product.category
      );
      productsCopy = productsCopy.filter(
        (product) => subCategory === product.subCategory
      );

      setRelatedProducts(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="Related" text2="Products" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relatedProducts.map(({ _id, name, image, price, ...props }) => (
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

export default RelatedProducts;
