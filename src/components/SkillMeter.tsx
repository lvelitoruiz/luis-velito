import React from 'react'

export const SkillMeter = ({ skill,color,size }: any) => {


    return (
        <div className="mb-10">
            <p className="mb-4 font-extrabold">{skill}</p>
            <div className="relative h-[10px] w-full bg-white rounded-full">
                <span className={`absolute top-0 left-0 rounded-full bottom-0 bg-[${color}] transition-all duration-500 ease-in-out`} style={{ width: size, backgroundColor: color }}></span>
            </div>
        </div>
    )
}
