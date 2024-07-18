import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log("resId = ", resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5493214&lng=73.9315733&restaurantId=${resId}&catalog_qa=undefined`
    );

    const json = await data.json();
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    console.log(json?.data?.cards[2]?.card?.card?.info);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, areaName, avgRatingString, costForTwoMessage, cuisines } =
    resInfo;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{areaName}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating : {avgRatingString}</h4>
      <h4>{costForTwoMessage}</h4>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Chicken Masala</li>
        <li>Rice plate</li>
        <li>Manuchurian Rice</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
