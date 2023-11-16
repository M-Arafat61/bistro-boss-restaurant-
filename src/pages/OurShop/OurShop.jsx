import Navbar from "../../components/Shared/Navbar/Navbar";
import TitleCover from "../../components/Shared/TitleCover";
import shopImg from "../../assets/shop/banner2.jpg";
import ReactTab from "./ReactTab/ReactTab";

const OurShop = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TitleCover
        bgImg={shopImg}
        heading='Our Shop'
        subHeading='Would you like to try a dish?'
      ></TitleCover>
      <ReactTab></ReactTab>
    </div>
  );
};

export default OurShop;
