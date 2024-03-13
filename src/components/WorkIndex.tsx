import React, { useEffect, useState } from 'react'
import { Titles } from './Titles'
import { useStaticQuery, graphql } from 'gatsby';
import node from 'postcss/lib/node';
import { title } from 'process';

export const WorkIndex = () => {

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
        <div className="md:ml-4 pt-20 md:py-20">
            <div>
                <div className="ml-4 md:ml-[15%]">
                    <Titles color="#ED6459" vector={allWpPage.edges[0].node.indexWork.color} upper={allWpPage.edges[0].node.indexWork.title1} lower={allWpPage.edges[0].node.indexWork.title2} />
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="ml-4 lg:w-5/12 pr-4 md:pr-24 md:ml-[15%]">
                        <h3 className="md:w-7/12 font-bold italic text-[30px] text-[#1C1B20] mb-5 leading-none">{allWpPage.edges[0].node.indexWork.subtitle}</h3>
                        <p className="text-[#606060] leading-[30px] mb-10" dangerouslySetInnerHTML={{ __html: allWpPage.edges[0].node.indexWork.description }}></p>
                    </div>
                    <div className="px-4 bg-[#1C1B20] md:pl-[15%] md:pr-20 py-14 lg:px-32 mt-5 lg:w-7/12">
                        <div className="grid gap-4 md:grid-cols-2 mb-4 md:mb-10">
                            {
                                allWpPage.edges[0].node.indexWork.skills.map((item: any, index: number) => {
                                    return (
                                        <div className="text-white" key={index}>
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
