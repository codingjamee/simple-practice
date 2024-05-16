// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import styles from './styles.module.css'

// // Import Swiper styles
// // import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// // import './styles.css';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';


// const CoverFlow = (coverflowEffect) => {
//   return (
//     <Swiper
//       effect={"coverflow"}
//       // width="50%"
//       grabCursor={true}
//       centeredSlides={true}
//       slidesPerView={3}
//       spaceBetween={-200}
//       coverflowEffect={{
//         rotate: 0,
//         stretch: 0,
//         depth: 500,
//         modifier: 1,
//         slideShadows: false,
//       }}
//       // pagination={true}
//       modules={[EffectCoverflow, Pagination]}
//       className="mySwiper"
//     >
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default CoverFlow