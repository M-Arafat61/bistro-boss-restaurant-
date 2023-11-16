import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../../../components/Shared/Container";
import { useEffect, useState } from "react";
import useMenuItems from "../../../hooks/useMenuItems";
import TabPanelItems from "./TabPanelItems";
import { useParams } from "react-router-dom";

const ReactTab = () => {
  const categoryName = [
    "offered",
    "salad",
    "pizza",
    "soup",
    "desserts",
    "drinks",
    "popular",
  ];
  const { category } = useParams();
  const initialIndex = categoryName.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenuItems();
  const [offers, setOffers] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [salads, setSalads] = useState([]);
  const [soups, setSoups] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [popular, setPopular] = useState([]);
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
    const drinks = menu.filter(item => item.category === "drinks");
    setDrinks(drinks);
    const popular = menu.filter(item => item.category === "popular");
    setPopular(popular);
  }, [menu]);
  return (
    <Container>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList className='flex items-center justify-center mt-10 text-xl  font-semibold'>
          {/* <Tab>All</Tab> */}
          <div className='flex gap-2 md:gap-5'>
            {categoryName.map((category, index) => (
              <Tab
                key={category}
                className={`cursor-pointer px-2 ${
                  index === tabIndex ? "border-b-4 border-0 " : " "
                }`}
              >
                {category}
              </Tab>
            ))}
          </div>
        </TabList>

        <TabPanel>
          <TabPanelItems item={offers}></TabPanelItems>
        </TabPanel>
        <TabPanel>
          <TabPanelItems item={salads}></TabPanelItems>
        </TabPanel>
        <TabPanel>
          <TabPanelItems item={pizzas}></TabPanelItems>
        </TabPanel>
        <TabPanel>
          <TabPanelItems item={soups}></TabPanelItems>
        </TabPanel>
        <TabPanel>
          <TabPanelItems item={desserts}></TabPanelItems>
        </TabPanel>
        <TabPanel>
          <TabPanelItems item={drinks}></TabPanelItems>
        </TabPanel>
        <TabPanel>
          <TabPanelItems item={popular}></TabPanelItems>
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default ReactTab;
