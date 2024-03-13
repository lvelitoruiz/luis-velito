import { Link } from 'gatsby'
import React from 'react'

export const MenuItem = ({ item }: any) => {
    return (
        <li className="group mb-2 relative">
            <Link className="fw-gb text-[30px] g-link relative z-20 px-2" to={item.direction} target={item.isExternal ? '_blank' : ''}>
                <span className='z-10 absolute top-1/2 group-hover:w-full group-hover:px-2 h-3 transition-all duration-300 w-0 opacity-100 -translate-y-1/2 px-0 bg-gray-900'></span>
                <span className="z-20 pl-2 relative transition-all duration-300 group-hover:text-orange-400">{item.title}</span>
            </Link>
        </li>
    )
}
