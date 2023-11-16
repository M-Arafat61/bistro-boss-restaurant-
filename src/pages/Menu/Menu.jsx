import { Helmet } from "react-helmet-async";
import TitleCover from "../../components/Shared/TitleCover";
import SectionTitle from "../../components/Shared/SectionTitle";
import useMenuItems from "../../hooks/useMenuItems";
import { useEffect, useState } from "react";
import MenuCard from "../../components/Shared/MenuCard";

import bgImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenuItems();
  const [offers, setOffers] = useState();
  const [desserts, setDesserts] = useState();
  const [pizzas, setPizzas] = useState();
  const [salads, setSalads] = useState();
  const [soups, setSoups] = useState();
  useEffect(() => {
    const offered = menu.filter(item => item.category === "offered");
    setOffers(offered);
    const desserts = menu.filter(item => item.category === "dessert");
    setDesserts(desserts);
    const pizzas = menu.filter(item => item.category === "pizza");
    setPizzas(pizzas);
    const salads = menu.filter(item => item.category === "salad");
    setSalads(salads);
    const soups = menu.filter(item => item.category === "soup");
    setSoups(soups);
  }, [menu]);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Restaurant-Menu</title>
      </Helmet>
      <TitleCover
        bgImg={bgImg}
        heading='Our Menu'
        subHeading='Would you like to try a dish?'
      ></TitleCover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      <div className='mt-10'>
        <MenuCard
          item={offers}
          buttonText={"ORDER YOUR FAVORITE FOOD"}
          title='offered'
        ></MenuCard>
      </div>

      <div className='mt-10'>
        <TitleCover bgImg={dessertImg} heading={"Desserts"}></TitleCover>
      </div>
      <div className='mt-10'>
        <MenuCard
          item={desserts}
          buttonText={"ORDER YOUR FAVORITE FOOD"}
          title='desserts'
        ></MenuCard>
      </div>
      <div className='mt-10'>
        <TitleCover bgImg={pizzaImg} heading={"Pizza"}></TitleCover>
      </div>
      <div className='mt-10'>
        <MenuCard
          item={pizzas}
          buttonText={"ORDER YOUR FAVORITE FOOD"}
          title='pizza'
        ></MenuCard>
      </div>
      <div className='mt-10'>
        <TitleCover bgImg={saladImg} heading={"Salads"}></TitleCover>
      </div>
      <div className='mt-10'>
        <MenuCard
          item={salads}
          buttonText={"ORDER YOUR FAVORITE FOOD"}
          title='salad'
        ></MenuCard>
      </div>
      <div className='mt-10'>
        <TitleCover bgImg={soupImg} heading={"Soups"}></TitleCover>
      </div>
      <div className='my-10'>
        <MenuCard
          item={soups}
          buttonText={"ORDER YOUR FAVORITE FOOD"}
          title='soup'
        ></MenuCard>
      </div>
    </div>
  );
};

export default Menu;
