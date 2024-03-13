import { useStaticQuery, graphql } from 'gatsby';
import React, { forwardRef, useEffect, useState } from 'react'
import { SkillMeter } from './SkillMeter';

interface AboutSkillsProps {
    change: boolean; // Define the prop 'change' of type boolean
}


export const AboutSkills = forwardRef<HTMLDivElement, AboutSkillsProps>(({change},ref) => {

    const [data,setData] = useState(null);
    const [formatted,setFormatted] = useState<any>(null);

    const { allWpPage } = useStaticQuery(graphql`{
        allWpPage(filter: {slug: {eq: "skills-metrics"}}) {
          edges {
            node {
              id
              metrics {
                title
                texts {
                  icon
                  text
                  title
                }
                skilled {
                  color
                  percentage
                  title
                }
              }
            }
          }
        }
      }
  `);

  useEffect( () => {
    
    let dataObtained = allWpPage.edges[0].node.metrics.skilled;
    let formattedData = JSON.parse(JSON.stringify(dataObtained));
    formattedData.map( (item: any) => {
        item.percentage = '0%'
    })
    setFormatted(formattedData);
    setData(JSON.parse(JSON.stringify(dataObtained)));

  },[allWpPage])

  useEffect( () => {
    if(change) {
        setFormatted(allWpPage.edges[0].node.metrics.skilled);
    }
  },[change])


    return (
        <div ref={ref} className="flex flex-col md:flex-row md:justify-between md:items-center lg:items-start pb-20">
            <div className="w-full md:w-6/12 px-4 mb-10 md:mb-0 md:pl-[15%]">
                <h3 className="font-bold italic text-[30px] text-[#1C1B20] leading-none mb-10">{allWpPage.edges[0].node.metrics.title}</h3>
                {
                    formatted !== null && formatted.map((item: any, index: number) => {
                        return (
                            <SkillMeter key={index} color={item.color} skill={item.title} size={item.percentage} />
                        )
                    })
                }
            </div>
            <div className="w-full md:w-5/12 p-4 md:p-0 mt-10">
                <div className="grid gap-y-10 grid-cols-2 lg:grid-cols-2 lg:mb-10">
                    {
                        allWpPage.edges[0].node.metrics.texts.map((item: any, index: number) => {
                            return (
                                <div className="flex items-center" key={index}>
                                    <i className={`${item.icon} text-[40px] mr-2 text-[#606060]`}></i>
                                    <div>
                                        <p className="font-extrabold italic text-[23px] text-[#1C1B20] leading-none">{item.title}</p>
                                        <p className="text-sm">{item.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
})
