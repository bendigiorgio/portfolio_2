import "./WorkExp.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default function WorkExp() {
  return (
    <div className="experience wrapper">
      <div className="heading">
        <div id="title">What I Do</div>
        <div id="subtitle">Data Analysis</div>
      </div>
      <div className="carousel-wrapper">
        <Swiper
          slidesPerView= {'auto'}
          slidesPerGroup= {3}
          spaceBetween={70}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="carousel-card">
              <div className="carousel-text">
                <div id="tools">Python, Tableau, Kaggle</div>
                <div id="title">Marketing Campaign Analysis</div>
              </div>
              <div className="glow-wrapper">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fa1cc55a45d3547c6af356f53cd86e4b5"
                  id="glow"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-card">
              <div className="carousel-text">
                <div id="tools">Python, Tableau, asddsaasdKaggle</div>
                <div id="title">Marketing Campaign Analysis</div>
              </div>
              <div className="glow-wrapper">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fa1cc55a45d3547c6af356f53cd86e4b5"
                  id="glow"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
