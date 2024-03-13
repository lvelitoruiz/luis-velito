import React from 'react'

export const AboutCareerSlide = ({title,subtitle,description}: any) => {
    return (
        <div className="min-w-[90%] md:min-w-[45%] lg:min-w-[30%] flex flex-col">
            <span className="bg-[#1C1B20] w-1 h-1 rounded-full"></span>
            <p className="mt-[10px] text-[#1C1B20] text-[30px] font-semibold">{title}</p>
            <p className="text-[#1C1B20] italic">{subtitle}</p>
            <p className="leading-[30px] text-[#606060] mt-[25px]" dangerouslySetInnerHTML={{ __html:description }}></p>
        </div>
    )
}
