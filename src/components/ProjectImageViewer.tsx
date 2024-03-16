import React from 'react'

export const ProjectImageViewer = ({color = "#DA5A37", image = ""}: any) => {
  return (
    <div className={`p-20 min-h-[315px] w-full md:min-h-[580px] flex items-center justify-center py-20`} style={{ backgroundColor: color}}>
      <div className='bg-white shadow-lg w-11/12 h-auto lg:w-[70%] lg:h-auto max-w-[700px]'>
        <img className="object-cover h-full w-full" src={image} alt="" />
      </div>
    </div>
  )
}
