// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";
import sl1 from "../../../assets/home/slide1.jpg";
import sl2 from "../../../assets/home/slide2.jpg";
import sl3 from "../../../assets/home/slide3.jpg";
import sl4 from "../../../assets/home/slide4.jpg";
import sl5 from "../../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={sl1} />
          <h3 className="text-4xl text-white text-center -mt-16 uppercase">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sl2} />
          <h3 className="text-4xl text-white text-center -mt-16 uppercase">
            pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sl3} />
          <h3 className="text-4xl text-white text-center -mt-16 uppercase">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sl4} />
          <h3 className="text-4xl text-white text-center -mt-16 uppercase">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sl5} />
          <h3 className="text-4xl text-white text-center -mt-16 uppercase">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
