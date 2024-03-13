import { useStaticQuery, graphql } from 'gatsby';
import React from 'react'

export const AboutTech = () => {

    const { allWpPage } = useStaticQuery(graphql`{
        allWpPage(filter: {slug: {eq: "work-index"}}) {
          edges {
            node {
              indexWork {
                color
                description
                skills {
                  skill {
                    legend
                    name
                  }
                  title
                }
                subtitle
                title1
                title2
              }
            }
          }
        }
      }
  `);

  
    return (
        <div className="bg-[#1C1B20]">
            <div className="ml-4 md:ml-[15%] py-20">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-5/12">
                        <h3 className="md:w-7/12 font-bold italic text-[30px] md:text-[40px] text-white mb-5 leading-none">{allWpPage.edges[0].node.indexWork.subtitle}</h3>
                    </div>
                    <div className="px-4 bg-[#1C1B20] md:pr-20 py-14 lg:px-24 mt-5 lg:w-7/12">
                        <div className="grid gap-4 grid-cols-2 md:grid-cols-2 mb-4 md:mb-10">
                            {
                                allWpPage.edges[0].node.indexWork.skills.map((item: any, index: number) => {
                                    return (
                                        <div className="text-white mb-4 md:mb-0" key={index}>
                                            <p className="font-bold mb-4">{item.title}</p>
                                            {
                                                item.skill.map((item: any, index: number) => {
                                                    return (
                                                        <p className="text-[#4C4A56] text-sm leading-[22px]" title={item.legend} key={index}>{item.name}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
