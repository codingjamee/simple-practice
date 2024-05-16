import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
// import CoverFlow from "./CoverFlow";
// import CardSwiper from "./CardSwiper";
import ThumbSwiper from "./ThumbSwiper";

function App() {
  return (
    <>
      <div style={{width: '100%', display: "flex",
            justifyContent: "center",
            alignItems: "center", backgroundColor: 'green'}}>
        <div
          style={{
            width: "50%",
            
          }}
        >
       {/* <CoverFlow />
       <CardSwiper /> */}
       <ThumbSwiper/>
        </div>
      </div>
    </>
  );
}

export default App;
