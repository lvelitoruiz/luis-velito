import React from 'react'

export const ProjectLink = ({link = ""}: any) => {
    return (
        <div className="bg-transparent">
            <div className="mx-4 py-20">
                <div className="flex items-center justify-center">
                    <a className="text-[20px] g-link" href={link} target='_blank'>
                        <span className="relative text-[#1C1B20]">see web page</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
