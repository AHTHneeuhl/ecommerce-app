import { Link } from "react-router-dom";
import { IProduct } from "../context/types";
import { useShop } from "../hooks";

const ProductItem = ({ _id, image, name, price }: IProduct) => {
  const { currency } = useShop();

  return (
    <Link to={`/product/${_id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="hover:scale-110 transition ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
