import { useStaticQuery, graphql } from 'gatsby';
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const Carousel = () => {

    const { allWpPage } = useStaticQuery(graphql`{
        allWpPage(filter: {slug: {eq: "banner-slider"}}) {
          edges {
            node {
              sliderPrincipal {
                principalGallery {
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

    useEffect(() => {
        console.log('the items: ', allWpPage.edges[0].node.sliderPrincipal.principalGallery.nodes[0].publicUrl);
    }, [allWpPage]);


    return (
        <div className='h-[281px] md:h-[781px] w-full'>
            <Swiper
                modules={[EffectFade, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ el: ".swiper-pagination" }}
                effect="fade"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                scrollbar={{ draggable: true }}
            >
                {allWpPage.edges[0].node.sliderPrincipal.principalGallery.nodes !== undefined &&
                    allWpPage.edges[0].node.sliderPrincipal.principalGallery.nodes.map((item: any, index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <img className="h-[281px] md:h-[781px] object-cover w-full" src={item.publicUrl} alt="" />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    )
}
