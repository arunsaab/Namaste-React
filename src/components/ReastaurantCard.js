const styleCard = {
  backgroundColor: "#f0f0f0"
};

const RestaurantCard = (props) => {
  // this is will break while not using cors plugin so mind it before use
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className="p-4 m-4 w-64 bg-gray-100 flex shadow-xl hover:bg-gray-200 flex-col justify-between min-h-[320px]">
      <img
        className="rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <div className="py-2">
        <h3 className="font-bold py-1">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
