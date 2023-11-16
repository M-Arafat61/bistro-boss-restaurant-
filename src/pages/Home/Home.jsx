import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefService from "./ChefService/ChefService";
import PopularMenu from "./PopularMenuItems/PopularMenu";
import Reviews from "./Reviews/Reviews";
import SingleMenuItem from "./SingleMenuItem/SingleMenuItem";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Restaurant-Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <SingleMenuItem></SingleMenuItem>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
