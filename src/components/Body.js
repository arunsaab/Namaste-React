import RestaurantCard from "./ReastaurantCard";
import { resData } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5493214&lng=73.9315733&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>
        Seems like you are offline, Please try again later with proper internet
        connection!!!!!!
      </h1>
    );
  }

  return listOfRes?.length ? (
    <div className="body">
      <div className="flex items-center">
        <div className="m-2">
          <input
            type="text"
            className="px-2 rounded-l border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-orange-300 px-4 ml-4 rounded-full"
            onClick={() => {
              const filteredResult = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );

              setFilteredRes(filteredResult);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="rounded-full bg-orange-300 px-4 m-2"
            onClick={() => {
              let temp = filteredRes.filter((res) => res.info.avgRating > 4);
              setFilteredRes(temp);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRes.map((res) => (
          <Link key={res.info.id} to={`/restaurants/${res.info.id}`}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
