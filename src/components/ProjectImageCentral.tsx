import React from 'react'

export const ProjectImageCentral = ({image}: any) => {
    return (
        <div className='min-h-[281px] md:min-h-[500px]'>
            <img className="object-cover h-auto w-full" src={image} alt="" />
        </div>
    )
}
