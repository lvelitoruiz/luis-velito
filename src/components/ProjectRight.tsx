import React from 'react'

export const ProjectRight = ({color,title,description,image}: any) => {
    return (
        <div className="flex flex-col lg:flex-row items-center pt-10 md:pt-20 lg:py-20">
            <div className="pr-4 pl-4 md:pl-[10%] md:pr-[10%] w-full lg:pl-[15%] lg:w-6/12 lg:pr-20">
                <h3 className="font-bold italic text-[30px] text-[#1C1B20] w-full lg:w-10/12 mb-5 leading-none">{title}</h3>
                <p className="text-[#606060] leading-[30px] mb-10 w-full lg:w-10/12" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <div className="w-full lg:w-6/12 h-[315px] md:h-[670px] flex items-center justify-center" style={{backgroundColor: color}}>
                <div className='bg-white shadow-lg w-[50%] h-[80%] max-w-[1200px]'>
                    <img className="object-cover h-full w-full" src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
