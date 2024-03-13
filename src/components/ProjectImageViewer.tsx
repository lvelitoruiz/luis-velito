import React from 'react'

export const ProjectImageViewer = ({color = "#DA5A37", image = ""}: any) => {
  return (
    <div className={`p-20 h-[315px] w-full md:h-[580px] flex items-center justify-center`} style={{ backgroundColor: color}}>
      <div className='bg-white shadow-lg w-11/12 h-[90%] lg:w-[70%] lg:h-[90%] max-w-[1200px]'>
        <img className="object-cover h-full w-full" src={image} alt="" />
      </div>
    </div>
  )
}
