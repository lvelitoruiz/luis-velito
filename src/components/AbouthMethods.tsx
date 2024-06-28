import { useStaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { AboutCareerSlide } from './AboutCareerSlide';

export const AbouthMethods = () => {
    const [swiperInstanceTimeline, setSwiperInstanceTimeline] = useState<SwiperCore>();

    const { allWpPage } = useStaticQuery(graphql`{
        allWpPage(filter: {slug: {eq: "methods-timeline"}}) {
          edges {
            node {
              id
              timelineMethods {
                title
                methods {
                  description
                  subtitle
                  tiltle
                }
              }
            }
          }
        }
      }
  `);

    const setSlider = (el: SwiperCore) => {
        setSwiperInstanceTimeline(el);
    }

    const goNext = () => {
        swiperInstanceTimeline?.slideNext();
        console.log(allWpPage);
    }

    const goBack = () => {
        swiperInstanceTimeline?.slidePrev();
    }
    
    return (
        <div className="pb-20">
            <div className="mx-4 md:ml-[15%] mb-5">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-5/12">
                        <h3 className="md:w-6/12 font-bold italic text-[30px] mb-5 leading-none">{allWpPage.edges[0].node.timelineMethods.title}</h3>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#EAEAEA]">
                <div className="mx-4 md:ml-[15%] md:mr-[44px]">
                    <div className="flex gap-10 items-start overflow-auto pb-10">
                        <Swiper
                            modules={[EffectFade, Pagination]}
                            spaceBetween={32}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                960: {
                                    slidesPerView: 3,
                                },
                            }}
                            className='flex w-full gap-10 items-start overflow-auto pb-10'
                            onSwiper={(swiper) => setSlider(swiper)}
                        >
                            {
                                allWpPage.edges[0].node.timelineMethods.methods.map((item: any, index: number) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <AboutCareerSlide title={item.tiltle} subtitle={item.subtitle} description={item.description} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end mr-[15px] md:mr-[64px] gap-4">
                <button className="w-[38px] h-[38px] bg-[#1C1B20] hover:bg-[#C7C7C7] flex items-center justify-center" onClick={goBack}>
                    <i className="icon-arrow-left text-lg text-white"></i>
                </button>
                <button className="w-[38px] h-[38px] bg-[#1C1B20] hover:bg-[#C7C7C7] flex items-center justify-center" onClick={goNext}>
                    <i className="icon-arrow-right text-lg text-white"></i>
                </button>
            </div>
        </div>
    )
}
