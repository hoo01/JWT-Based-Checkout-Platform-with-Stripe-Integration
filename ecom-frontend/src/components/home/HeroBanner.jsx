// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

import { bannerLists } from '../../utils';
import { Link } from 'react-router-dom';

const colors = [
  "bg-[#FFF8E7]", // 淡米色
  "bg-[#FDF3D1]", // 柔黄
  "bg-[#E6F4F1]"  // 浅蓝青
];

const HeroBanner = () => {
  return (
    <div className="py-2 rounded-md">
      <Swiper
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Pagination, EffectFade, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
      >
        {bannerLists.map((item, i) => (
          <SwiperSlide key={item.id}>
            <div className={`carousel-item sm:h-[500px] h-96 ${colors[i]} flex items-center`}>
              <div className="w-full h-full flex items-center justify-center px-6">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 w-full max-w-screen-xl mx-auto">

                  {/* 左侧文字区域 */}
                  <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
                    <div className="text-left max-w-[520px] px-4">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-700 tracking-wide">
                        {item.title}
                      </h3>
                      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mt-2 leading-tight">
                        {item.subtitle}
                      </h1>
                      <p className="mt-4 text-base text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                      <Link
                        className="mt-6 inline-block bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all"
                        to="/products"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>

                  {/* 右侧图片区域 - 靠右居中 */}
                  <div className="lg:w-1/2 w-full flex justify-center">
                    <img
                      src={item?.image}
                      alt={item?.title}
                      className="w-full max-w-[440px] max-h-[500px] object-contain"
                    />
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default HeroBanner;