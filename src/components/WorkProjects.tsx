import React from 'react'
import { Titles } from './Titles'
import { useStaticQuery, graphql } from 'gatsby';

export const WorkProjects = () => {

    const { allWpPage } = useStaticQuery(graphql`{
        allWpPage(filter: {slug: {eq: "project-index"}}) {
          edges {
            node {
              indexProjects {
                color
                description
                title1
                subtitle
                title2
              }
            }
          }
        }
      }
  `);

  
    return (
        <div className="ml-4 mr-4 md:mr-0 md:ml-[15%] pt-20 pb-20 md:pb-40">
            <div>
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <div className="lg:w-5/12 pr-24">
                        <Titles color="#1C1B20" vector={allWpPage.edges[0].node.indexProjects.color} upper={allWpPage.edges[0].node.indexProjects.title1} lower={allWpPage.edges[0].node.indexProjects.title2} />
                    </div>
                    <div className="lg:w-5/12 md:pr-24 lg:mr-0">
                        <h3 className="lg:w-7/12 font-bold italic text-[30px] text-[#1C1B20] my-10 lg:mt-0 lg:mb-5 leading-none">{allWpPage.edges[0].node.indexProjects.subtitle}</h3>
                        <p className="text-[#606060] leading-[30px]" dangerouslySetInnerHTML={{ __html: allWpPage.edges[0].node.indexProjects.description }}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
