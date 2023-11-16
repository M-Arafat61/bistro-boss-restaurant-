import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/Shared/SectionTitle";
import Container from "../../../components/Shared/Container";

const Category = () => {
  return (
    <section>
      <Container>
        <SectionTitle
          subHeading='From 11:00am to 10:00pm'
          heading='ORDER ONLINE'
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper mt-10'
        >
          <SwiperSlide>
            <img src={slide1} alt='' />
            <p className='text-center -mt-14 text-3xl font-bold text-white'>
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt='' />
            <p className='text-center -mt-14 text-3xl font-bold text-white'>
              Pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt='' />
            <p className='text-center -mt-14 text-3xl font-bold text-white'>
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt='' />
            <p className='text-center -mt-14 text-3xl font-bold text-white'>
              Desserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt='' />
            <p className='text-center -mt-14 text-3xl font-bold text-white'>
              Salads
            </p>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Category;
