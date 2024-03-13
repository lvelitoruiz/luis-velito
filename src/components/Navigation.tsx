import React from 'react'
import { MainMenu } from './MainMenu';
import { useStaticQuery, graphql } from 'gatsby';

interface NavigationProps {
    expanded: boolean;
    onExpand: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ expanded, onExpand }) => {
    const expand = () => {
        onExpand();
    };

    const { allWpPage } = useStaticQuery(graphql`
        {
            allWpPage(filter: {slug: {eq: "main-navigation"}}) {
                edges {
                    node {
                        personal {
                            personalItems {
                                direction
                                isExternal
                                title
                            }
                            location
                            otherLinks {
                                title
                                url
                            }
                        }
                    }
                }
            }
        }
    `);

    const menu = allWpPage.edges[0].node.personal.personalItems;
    const otherLinks = allWpPage.edges[0].node.personal.otherLinks;

    return (
        <div className={`fixed top-0 bottom-0 right-0 md:top-[43px] md:bottom-[43px] left-0 md:right-[43px] z-10 ${expanded ? 'translate-x-0' : '-translate-x-full'} transition-all duration-1000 ease-in-out`}>
            <div className={`bg-[#1c1b2099] ${expanded ? 'w-[100%]' : 'w-[0%] delay-200'} h-full transition-all duration-500 ease-in-out absolute left-0 top-0`}></div>
            <div className={`bg-white ${expanded ? 'w-[70%] delay-500' : 'w-[20%]'} h-full flex items-center transition-all duration-500 ease-in-out z-10 relative`}>
                <div className="flex items-center">
                    <div className="hidden md:block" onClick={expand}>
                        <i className="icon-close cursor-pointer text-2xl ml-[30px]"></i>
                    </div>
                    <div className="ml-[15px] md:ml-32">
                        <MainMenu menuList={menu} />
                        <div className="pl-4">
                            <p className="text-sm text-[#1C1B20] mb-4">{allWpPage.edges[0].node.personal.location}</p>
                            {
                                otherLinks.map( (item:any,index:number) => {
                                    return(
                                        <p className='m-0' key={index}>
                                            <a className="inline-block before:w-2 before:content-[' '] before:absolute before:bottom-0 before:h-[3px] hover:before:w-full pr-0 hover:pr-1 before:bg-orange-600 relative font-extrabold pb-2 mb-3 before:transition-all before:duration-200 w-auto" href={item.url}>{item.title}</a>
                                        </p>
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
