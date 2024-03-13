import React from 'react'
import { MenuItem } from './MenuItem'

export const MainMenu = ({ menuList }: any) => {
    return (
        <nav className="mb-32">
            <ul>
                {
                    menuList !== undefined && menuList.length > 0
                    && menuList.map((item: any, index: number) => {
                        return (
                            <MenuItem item={item} key={index} />
                        )
                    })
                }
            </ul>
        </nav>
    )
}
