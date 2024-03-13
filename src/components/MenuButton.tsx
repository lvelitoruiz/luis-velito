import React from 'react';

interface MenuButtonProps {
    onExpand: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ onExpand }) => {
    const expand = () => {
        onExpand();
    };

    return (
        <div className="fixed top-1/2 translate-y-2/4 z-10 flex items-center justify-center ml-[20px] cursor-pointer" onClick={expand}>
            <i className="icon-nav text-2xl"></i>
            <p className="text-[11px] ml-[-10px] h-[10px] rotate-[-90deg] font-semibold tracking-widest">MENU</p>
        </div>
    );
};
