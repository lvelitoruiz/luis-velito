import React from 'react'

export const ProjectPresentation = ({color,legend,title,subtitle,description1,description2,list}: any) => {
    return (
        <div className="pb-20 lg:pb-0 lg:h-screen relative" style={ {backgroundColor: color}}>
            <div className="hidden md:block absolute h-[44px] w-full left-0 right-0 top-0 z-10">
                <h1 className="text-sm h-[44px] flex items-center ml-[44px] text-white">LUISVELITO</h1>
            </div>
            <p className="absolute top-[30px] left-[15px] text-sm md:hidden">LUISVELITO</p>
            <div className="ml-4 md:ml-[15%] pt-[80px] md:pt-[10%]">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-5/12">
                        <p className="italic text-sm text-white mb-2">{legend}</p>
                        <h3 className="fw-gb text-[30px] md:text-[40px] leading-[48px]">{title}</h3>
                        <h3 className="fw-gb text-[30px] md:text-[40px] text-white mb-5 leading-[48px]">{subtitle}</h3>
                    </div>
                </div>
                <div className="grid grid-cols-6 lg:grid-cols-12 mt-20 gap-20">
                    <div className="col-span-5 lg:col-span-3">
                        <p className="text-white italic mb-3 opacity-70">The Client</p>
                        <p className="leading-[30px] text-white" dangerouslySetInnerHTML={{ __html: description1 }}></p>
                    </div>
                    <div className="col-span-5 lg:col-span-4">
                        <p className="text-white italic mb-3 opacity-70">Description</p>
                        <p className="leading-[30px] text-white" dangerouslySetInnerHTML={{ __html: description2 }}></p>
                    </div>
                    <div className="col-span-5 lg:col-span-2">
                        <p className="text-white italic mb-3 opacity-70">Tech Stack</p>
                        {
                            list.map( (item:any,index:number) => {
                                return(<p className="leading-[30px] text-white" key={index}><a href={item.link} target='_blank'>{item.text}</a></p>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
