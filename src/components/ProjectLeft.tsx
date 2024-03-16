import React from 'react'

export const ProjectLeft = ({image,title,description}:any) => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center pt-10 md:pt-20 lg:py-20">
            <div className="left-image flex items-center justify-center">
                <div className='bg-white shadow-lg max-w-[500px]'>
                    <img className="block h-auto w-full max-w-[500px]" src={image} alt="" />
                </div>
            </div>
            <div className="w-full pr-4 pl-4 md:pl-[10%] md:pr-[10%] lg:pr-0 lg:w-3/12 lg:pl-20">
                <h3 className="font-bold italic text-[30px] text-[#1C1B20] mb-5 leading-none">{title}</h3>
                <p className="text-[#606060] leading-[30px] mb-10" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </div>
    )
}
