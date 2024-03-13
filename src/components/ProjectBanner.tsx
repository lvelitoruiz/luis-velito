import { useStaticQuery, graphql } from 'gatsby';
import React from 'react'
import { Titles } from './Titles';
import Lottie from "lottie-react";
import Cubes from "../images/cubes.json"

export const ProjectBanner = () => {

    const { allWpPage } = useStaticQuery(graphql`{
        allWpPage(filter: {slug: {eq: "projects-page"}}) {
          edges {
            node {
              projectsSummary {
                description
                suntitle
                title1
                title2
              }
            }
          }
        }
      }
  `);

  
    return (
        <div className="md:h-screen flex items-end relative pattern overflow-hidden mb-12 lg:mb-0">
            <p className="absolute top-[30px] left-[15px] text-sm md:hidden">LUISVELITO</p>
            <div className='absolute bottom-0 right-0'>
                <Lottie className='p-1 scale-[4]' height={600} width={600} animationData={Cubes} loop={true} />
            </div>
            <div className="flex w-full mt-[200px] md:mt-0 flex-col md:flex-row relative md:h-[50%] z-10">
                <div className="absolute left-4 md:left-[15%] top-[-120px]">
                    <Titles color={"#1C1B20"} vector={"black"} upper={allWpPage.edges[0].node.projectsSummary.title1} lower={allWpPage.edges[0].node.projectsSummary.title2} />
                </div>
                <div className="md:w-6/12 p-4 md:pl-[15%]">
                </div>
                <div className="px-4 md:px-0 md:w-5/12">
                    <p className="italic pb-5 pt-10 md:pt-14 text-[30px] text-[#1C1B20] font-extrabold leading-none">{allWpPage.edges[0].node.projectsSummary.suntitle}</p>
                    <p className="text-[#606060] pb-20 md:pb-24 pr-10 leading-[30px]" dangerouslySetInnerHTML={{ __html: allWpPage.edges[0].node.projectsSummary.description }}></p>
                </div>
            </div>
        </div>
    )
}
