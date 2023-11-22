import { useEffect, useState } from "react";

import MenuCard from "../../../components/Shared/MenuCard";
import useMenuItems from "../../../hooks/useMenuItems";
import Container from "../../../components/Shared/Container";
import SectionTitle from "../../../components/Shared/SectionTitle";

const PopularMenu = () => {
  const [menu] = useMenuItems();
  const [popularMenu, setPopularMenu] = useState([]);

  useEffect(() => {
    const popularItems = menu.filter(item => item.category === "popular");
    setPopularMenu(popularItems);
  }, [menu]);
  return (
    <section>
      <Container>
        <SectionTitle
          subHeading='Check it out'
          heading='FROM OUR MENU'
        ></SectionTitle>
        <div className='mt-10'>
          <MenuCard
            item={popularMenu}
            buttonText={"View Full  Menu"}
            title={"popular"}
          />
        </div>
      </Container>
    </section>
  );
};

export default PopularMenu;
