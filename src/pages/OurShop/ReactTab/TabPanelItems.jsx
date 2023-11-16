import FoodCard from "./FoodCard";

const TabPanelItems = ({ item }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {item?.map(foodItem => (
        <FoodCard key={foodItem._id} foodItem={foodItem}></FoodCard>
      ))}
    </div>
  );
};

export default TabPanelItems;
