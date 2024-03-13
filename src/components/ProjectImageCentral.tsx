import React from 'react'

export const ProjectImageCentral = ({image}: any) => {
    return (
        <div className='h-[281px] md:h-[781px]'>
            <img className="object-cover h-full w-full" src={image} alt="" />
        </div>
    )
}
