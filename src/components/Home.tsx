import React, { useEffect, useRef, useState } from 'react'
import { Banner } from './Banner'
import { Navigation } from './Navigation'
import { MenuButton } from './MenuButton';
import { Titles } from './Titles';
import { Carousel } from './Carousel';
import { WorkIndex } from './WorkIndex';
import { WorkProjects } from './WorkProjects';
import { GalleryIndex } from './GalleryIndex';
import { Footer } from './Footer';
import { MenuButtonResponsive } from './MenuButtonResponsive';
import { useInView } from 'react-intersection-observer';

export const Home = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState(false);
    const [toExpand, setExpand] = useState(false);
    const [move, setMove] = useState(false);

    const [scrollY, setScrollY] = useState<number>(0);

    const handleScroll = () => {
        const scrollTop = divRef.current?.scrollTop || 0;
        setScrollY(scrollTop);
    };

    const { ref, inView } = useInView({
        threshold: 0.6,
    });

    useEffect(() => {
        if (scrollY >= 20) {
            setExpand(true)
        } else {
            setExpand(false)
        }
    }, [scrollY]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    useEffect( () => {
        if(inView) {
            setMove(true)
        } else {
            setMove(false)
        }
    },[inView]);

    return (
        <div ref={divRef} onScroll={handleScroll} className="h-screen bg-[#F8F8F8] overflow-y-auto overflow-x-hidden">
            <MenuButton onExpand={toggleExpanded} />
            <Navigation expanded={expanded} onExpand={toggleExpanded} />
            <MenuButtonResponsive onExpand={toggleExpanded} expanded={expanded} />
            <Banner expanded={toExpand} />

            <Carousel ref={ref} move={move} />

            <WorkIndex />

            <WorkProjects />

            <GalleryIndex />

            {/* <div className="bg-[#1C1B20]">
                <div className="ml-4 md:ml-[15%] py-20">
                    <h3 className="fw-gb text-white text-[27px]">My clients</h3>
                    <div className="grid grid-cols-10 gap-y-20 py-10 md:py-20 md:w-10/12">
                        <div className="col-span-5 md:col-span-3 lg:col-span-2 text-center">
                            <img className="m-auto" src="./img/client.png" alt="" />
                        </div>
                        <div className="col-span-5 md:col-span-3 lg:col-span-2 text-center">
                            <img className="m-auto" src="./img/client.png" alt="" />
                        </div>
                        <div className="col-span-5 md:col-span-3 lg:col-span-2 text-center">
                            <img className="m-auto" src="./img/client.png" alt="" />
                        </div>
                        <div className="col-span-5 md:col-span-3 lg:col-span-2 text-center">
                            <img className="m-auto" src="./img/client.png" alt="" />
                        </div>
                        <div className="col-span-5 md:col-span-3 lg:col-span-2 text-center">
                            <img className="m-auto" src="./img/client.png" alt="" />
                        </div>
                        <div className="col-span-5 md:col-span-3 lg:col-span-2 text-center">
                            <img className="m-auto" src="./img/client.png" alt="" />
                        </div>
                        <div className="col-span-5 md:col-span-3 lg:col-span-2 text-center">
                            <img className="m-auto" src="./img/client.png" alt="" />
                        </div>
                        <div className="col-span-5 md:col-span-3 lg:col-span-2 text-center">
                            <img className="m-auto" src="./img/client.png" alt="" />
                        </div>
                        <div className="col-span-5 md:col-span-3 lg:col-span-2 text-center">
                            <img className="m-auto" src="./img/client.png" alt="" />
                        </div>
                        <div className="col-span-5 md:col-span-3 lg:col-span-2 text-center">
                            <img className="m-auto" src="./img/client.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}

            <Footer />
        </div>
    )
}
