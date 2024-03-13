import React, { useRef, useState } from 'react'
import { Footer } from './Footer'
import { MenuButton } from './MenuButton'
import { Navigation } from './Navigation';
import { GalleryIndex } from './GalleryIndex';
import { ProjectBanner } from './ProjectBanner';
import { MenuButtonResponsive } from './MenuButtonResponsive';

export const Project = () => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    return (
        <div className="h-screen bg-[#F8F8F8] overflow-y-auto overflow-x-hidden">
            <MenuButton onExpand={toggleExpanded} />
            <Navigation expanded={expanded} onExpand={toggleExpanded} />
            <MenuButtonResponsive onExpand={toggleExpanded} expanded={expanded} />

            <div className="h-screen bg-[#F8F8F8] overflow-y-auto overflow-x-hidden">
                
                <ProjectBanner />

                <GalleryIndex link={false} />
                <Footer />
            </div>
        </div>
    )
}
