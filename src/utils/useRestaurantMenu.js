import { useEffect, useState } from "react";
import { RESTMENU } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTMENU + resId);
    const json = await data.json();
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
  };

  return resInfo;
};

export default useRestaurantMenu;
