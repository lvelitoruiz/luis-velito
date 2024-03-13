import React from 'react'
import { CentralText } from './CentralText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useStaticQuery, graphql } from 'gatsby'

export const Banner = ({ expanded = false }: any) => {

    const { allWpPage } = useStaticQuery(graphql`{
            allWpPage(filter: {slug: {eq: "banner"}}) {
            edges {
                node {
                descriptor {
                    description
                    title
                }
                }
            }
            }
        }
      `);

    return (
        <div className={`g-banner ${expanded ? 'active' : ''}`}>
            <div className="fw-gb absolute right-[-120px] md:right-[-220px]">
                <CentralText showPoint={false} endText='HE' originalText='HO' />
                <CentralText showPoint endText='LLO' originalText='LA!' />
            </div>
            <div className="g-banner--text hidden md:block">
                <p className="absolute top-[30px] left-[15px] text-sm">LUIS VELITO</p>
                <p className="italic mb-6"><FontAwesomeIcon icon={faHeart} className='ml-1' /> {allWpPage.edges[0].node.descriptor.title}</p>
                <p className="font-lato font-extralight text-[24px] leading-[30px] italic" dangerouslySetInnerHTML={{ __html: allWpPage.edges[0].node.descriptor.description}}></p>
            </div>
        </div>
    )
}
