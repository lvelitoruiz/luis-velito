import React from 'react'
import { Titles } from './Titles'
import { useStaticQuery, graphql } from 'gatsby';
import Lottie from "lottie-react";
import  Blob from '../images/blob.json';

export const BundlePresentation = () => {

    const { allWpPage } = useStaticQuery(graphql`{
      allWpPage(filter: {slug: {eq: "components"}}) {
        edges {
          node {
            components {
              aboutGallery {
                nodes {
                  publicUrl
                }
              }
              color
              description
              title1
              title2
              vector
            }
          }
        }
      }
    }
  `);

  
    return (
        <div className="md:h-screen flex items-end relative pattern">
            <div className='absolute top-0 right-0'>
                <Lottie className='p-1 scale-[7]' height={600} width={600} animationData={Blob} loop={true} />
            </div>
            <p className="absolute top-[30px] left-[15px] text-sm md:hidden">LUISVELITO</p>
            <div className="flex w-full mt-[200px] md:mt-0 flex-col md:flex-row relative md:h-[50%] bg-[#50b3ec]">
                <div className="absolute left-4 md:left-[15%] top-[-120px]">
                    <Titles color="#1C1B20" vector={allWpPage.edges[0].node.components.vector} upper={allWpPage.edges[0].node.components.title1} lower={allWpPage.edges[0].node.components.title2} />
                </div>
                <div className="md:w-6/12 p-4 md:pl-[15%]">
                    <p className="text-white py-20 md:py-24 pr-10 leading-[30px]" dangerouslySetInnerHTML={{ __html: allWpPage.edges[0].node.components.description }}>

                    </p>
                </div>
                <img className="w-full md:w-6/12 h-auto object-cover" src={allWpPage.edges[0].node.components.aboutGallery.nodes[0].publicUrl} alt="" />
            </div>
        </div>
    )
}
