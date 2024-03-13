import React from 'react'

export const ProjectDescriptionWhite = ({title,description}: any) => {
    return (
        <div className="bg-white">
            <div className="pl-4 pr-4 md:pl-[10%] md:pr-[10%] lg:pr-0 lg:pl-[15%] py-10 md:py-20 lg:py-40">
                <div className="flex lg:items-center flex-col lg:flex-row">
                    <div className="lg:w-5/12">
                        <h3 className="lg:w-7/12 font-bold italic text-[30px] md:text-[40px] mb-5 leading-none">{title}</h3>
                    </div>
                    <div className="lg:w-4/12">
                        <p className="text-[#606060]" dangerouslySetInnerHTML={{ __html: description }}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
