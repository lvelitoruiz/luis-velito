import React from 'react'

interface MenuButtonProps {
    onExpand: () => void;
    expanded: boolean
}

export const MenuButtonResponsive: React.FC<MenuButtonProps> = ({ onExpand, expanded }) => {

    const expand = () => {
        onExpand();
    };

    return (
        <div className='absolute md:hidden top-4 right-4 z-50 h-11 w-11 rounded-full bg-white flex items-center justify-center' onClick={expand}>
            {
                !expanded ?
                <i className="icon-nav text-2xl"></i> : <i className="icon-close text-2xl"></i>
            }
        </div>
    )
}
