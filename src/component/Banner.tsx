import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../assets/img/Lachcha-Semai.png";
import img2 from "../assets/img/mosla.jpg";
import img3 from "../assets/img/ghee340.jpg";
import img4 from "../assets/img/green-mosala.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="w-7xl mx-auto my-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {[img1, img2, img3, img4, img1].map((image, index) => (
          <SwiperSlide key={index}>
            <div className=" w-full h-[500px] flex items-center justify-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-center rounded-lg "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
