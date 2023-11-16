import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";

import { Icon } from "@iconify/react";
import Container from "../../../components/Shared/Container";
import SectionTitle from "../../../components/Shared/SectionTitle";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <Container>
      <div className='my-20'>
        <SectionTitle
          subHeading={"What Our Clients Say"}
          heading={"Testimonials"}
        ></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
          {reviews.map(review => (
            <SwiperSlide key={review._id}>
              <div className='my-10 px-20 flex flex-col items-center space-y-5 text-center'>
                <Icon className='text-4xl' icon='fa:quote-left' />
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p>{review.details}</p>
                <h3 className='text-extended-yellow text-2xl'>{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Reviews;
