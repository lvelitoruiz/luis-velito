import React from 'react'

export const BorderRight = () => {
    return (
        <div className="hidden md:flex absolute w-[44px] h-full right-0 top-0 bottom-0 bg-white z-10 items-center justify-center">
            <div className="hidden md:flex flex-col items-center justify-center gap-2">
                <a href=""><i className="icon-fb text-lg"></i></a>
                <a href=""><i className="icon-in text-lg"></i></a>
                <a href=""><i className="icon-insta text-lg"></i></a>
            </div>
        </div>
    )
}
