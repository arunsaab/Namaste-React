import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
