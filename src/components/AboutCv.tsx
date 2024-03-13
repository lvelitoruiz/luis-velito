import { useStaticQuery, graphql } from 'gatsby';
import React, { useEffect, useState } from 'react'

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const AboutCv = () => {

    const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

    const { allWpPage } = useStaticQuery(graphql`{
        allWpPage(filter: {slug: {eq: "about-cv"}}) {
          edges {
            node {
              cvAbout {
                description
                title1
                resume {
                  node {
                    publicUrl
                  }
                }
                cvGallery {
                  nodes {
                    publicUrl
                  }
                }
              }
            }
          }
        }
      }
  `);

    const goNext = () => {
        swiperInstance?.slideNext();
    }

    const goBack = () => {
        swiperInstance?.slidePrev();
    }



    return (
        <div className="flex flex-col lg:flex-row justify-between items-center py-20">
            <div className="lg:w-6/12 pl-4 md:pl-[15%] pb-12 md:pb-0">
                <h3 className="font-bold italic text-[30px] text-[#1C1B20] mb-5 leading-none">{allWpPage.edges[0].node.cvAbout.title1}</h3>
                <div className="text-[#606060] leading-[30px] mb-10" dangerouslySetInnerHTML={{ __html: allWpPage.edges[0].node.cvAbout.description }}></div>
                <a
                    href={allWpPage.edges[0].node.cvAbout.resume.node.publicUrl}
                    target='_blank'
                    className="cursor-pointer text-xs mb-4 text-white relative inline-block gap-1 py-3 pl-3 pr-4 items-center bg-[#3586ff] hover:bg-[#6692d5] transition-all ease-in-out duration-300"
                    download
                >
                    <i className="icon-arrow-left -rotate-90 inline-block text-xs text-white"></i>
                    <span className='ml-2'>Download Resume</span>
                </a>
            </div>
            <div className='w-full lg:w-6/12 min-h-[566px] lg:min-h-[800px] relative overflow-hidden'>
                <div
                    className="flex items-center flex-col w-full h-[520px] md:h-[800px]"
                >
                    <div
                        className="flex items-center justify-between  w-full box-border px-4 md:w-[566px] relative"
                    >
                        <button
                            onClick={goBack}
                            className="cursor-pointer text-xs mb-4 text-white relative flex gap-1 h-8 px-3 items-center bg-[#1C1B20] hover:bg-[#C7C7C7] transition-all ease-in-out duration-300"
                        >
                            <i className="icon-arrow-left text-xs text-white"></i>
                            <span>Previous</span>
                        </button>
                        <button
                            onClick={goNext}
                            className="cursor-pointer text-xs mb-4 text-white relative flex gap-1 h-8 px-3 items-center bg-[#1C1B20] hover:bg-[#C7C7C7] transition-all ease-in-out duration-300"
                        >
                            <span>Next</span>
                            <i className="icon-arrow-right text-xs text-white"></i>
                        </button>
                    </div>

                    <div className="w-full h-[520px] md:w-[566px] md:h-[800px] justify-center mx-auto relative">
                        <Swiper
                            modules={[EffectFade, Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            pagination={{ el: ".swiper-pagination" }}
                            effect="fade"
                            onSwiper={(swiper) => setSwiperInstance(swiper)}
                        >
                            {allWpPage.edges[0].node.cvAbout.cvGallery.nodes !== undefined &&
                                allWpPage.edges[0].node.cvAbout.cvGallery.nodes.map((item: any, index: number) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <img className="h-auto md:h-[781px] object-cover w-full" src={item.publicUrl} alt="" />
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
