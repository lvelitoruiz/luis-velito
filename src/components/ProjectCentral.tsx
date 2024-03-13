import React, { useEffect, useState } from 'react'
import { Footer } from './Footer'
import { GalleryIndex } from './GalleryIndex'
import { MenuButton } from './MenuButton'
import { ProjectBanner } from './ProjectBanner'
import { Navigation } from './Navigation'
import { ProjectLink } from './ProjectLink'
import { ProjectImageViewer } from './ProjectImageViewer'
import { ProjectDescriptionWhite } from './ProjectDescriptionWhite'
import { ProjectImageCentral } from './ProjectImageCentral'
import { ProjectLeft } from './ProjectLeft'
import { ProjectRight } from './ProjectRight'
import { ProjectPresentation } from './ProjectPresentation'
import { PageProps } from 'gatsby'

export const ProjectCentral = ({information}: any) => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    useEffect(() => {
        console.log(information);
      }, [information]);

    return (
        <div className="h-screen bg-[#F8F8F8] overflow-y-auto overflow-x-hidden">
            <MenuButton onExpand={toggleExpanded} />
            <Navigation expanded={expanded} onExpand={toggleExpanded} />

            <div className="h-screen bg-[#F8F8F8] overflow-y-auto overflow-x-hidden">

                <section className="h-screen relative">
                    <div className="h-screen overflow-y-auto overflow-x-hidden bg-slate-50">
                        <ProjectPresentation legend={information.info.projectPosts.legend} title={information.info.projectPosts.title} subtitle={information.info.projectPosts.subtitle} description1={information.info.projectPosts.description1} description2={information.info.projectPosts.description2} list={information.info.projectPosts.techs} color={information.info.projectPosts.color} />

                        <ProjectImageCentral image={information.info.projectPosts.centralGallery.nodes[0].publicUrl} />

                        <ProjectDescriptionWhite title={information.info.projectPosts.titleSection1} description={information.info.projectPosts.descriptionSection1} />

                        <ProjectImageViewer color={information.info.projectPosts.color} image={information.info.projectPosts.image1.node.publicUrl} />

                        <ProjectLeft title={information.info.projectPosts.titleSection3} description={information.info.projectPosts.descriptionSection3} image={information.info.projectPosts.imageSection3.node.publicUrl} />

                        <ProjectRight title={information.info.projectPosts.titleSection4} description={information.info.projectPosts.descriptionSection4} image={information.info.projectPosts.imageSection4.node.publicUrl} color={information.info.projectPosts.color} />

                        <ProjectDescriptionWhite title={information.info.projectPosts.titleSection2} description={information.info.projectPosts.descriptionSection2} />

                        <ProjectImageViewer color={information.info.projectPosts.color} image={information.info.projectPosts.image2.node.publicUrl} />

                        <ProjectLink link={information.info.projectPosts.link} />

                        <Footer />
                    </div>
                </section>
                
            </div>
        </div>
    )
}
