import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useShop } from "../hooks";

const Search: React.FC = () => {
  const { search, showSearch, setSearch, setShowSearch } = useShop();
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-green-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
          value={search}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(event.target.value)
          }
        />
        <img src={assets.search_icon} alt="search icon" className="w-4" />
      </div>
      <img
        src={assets.cross_icon}
        alt="cross icon"
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default Search;
