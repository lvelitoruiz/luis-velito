import React, { useEffect, useRef, useState } from 'react'
import { MenuButton } from './MenuButton'
import { Navigation } from './Navigation'
import { Footer } from './Footer';
import { AboutPresentation } from './AboutPresentation';
import { AboutCv } from './AboutCv';
import { AboutSkills } from './AboutSkills';
import { useInView } from 'react-intersection-observer';
import { AboutTech } from './AboutTech';
import { AboutCareer } from './AboutCareer';
import { AbouthMethods } from './AbouthMethods';
import { MenuButtonResponsive } from './MenuButtonResponsive';

export const AboutMe = () => {

    const { ref, inView } = useInView({
        threshold: 0.8,
      });

    const divRef = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState(false);
    const [isOnAbout, setIsOnAbout] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    useEffect( () => {
        if(inView) {
            setIsOnAbout(true)
        } 
    },[inView]);


    return (
        <div ref={divRef} className="h-screen bg-[#F8F8F8] overflow-y-auto overflow-x-hidden">
            <div className='min-h-4 overflow-hidden w-full'>
                <MenuButton onExpand={toggleExpanded} />
                <Navigation expanded={expanded} onExpand={toggleExpanded} />
                <MenuButtonResponsive onExpand={toggleExpanded} expanded={expanded} />
                <div className="h-screen bg-[#F8F8F8] overflow-y-auto overflow-x-hidden">
                    <AboutPresentation />
                    <AboutCv />

                    <AboutSkills change={isOnAbout} ref={ref} />

                    <AboutTech />

                    <AboutCareer />

                    <AbouthMethods />

                    <Footer />
                </div>
            </div>
        </div>
    )
}
