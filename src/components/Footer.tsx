import React from 'react'
import Wave from '../images/wave-animated.svg'

export const Footer = () => {
    return (
        <>
            <div>
                <Wave />
            </div>
            <footer className="bg-[#3586ff] py-5 relative mt-0">
                <div className="pt-2 pb-10 md:pb-24">
                    <div className="flex justify-between items-center text-white px-16">
                        <div className='block'>
                            <h2 className="text-[24px] cursor-pointer inline-block font-extrabold mb-6 p-b1 w-auto before:w-4 before:content-[' '] before:absolute before:bottom-0 before:h-[3px] hover:before:w-full pr-0 hover:pr-1 before:bg-white before:bg-opacity-50 relative font-extrabold pb-2 mb-3 before:transition-all before:duration-200">LUISVELITO</h2>
                            <p className='text-sm font-extralight'>© 2024 Made with care on Lima, Peru. All rights reserved.</p>
                            {/* <a className="font-lato mb-1 opacity-100 hover:opacity-80 transition-all duration-300 ease-in-out" href="">pogolvelito@gmail.com</a>
                            <a className="font-lato mb-1 opacity-100 hover:opacity-80 transition-all duration-300 ease-in-out" href="">+51 955 333 206</a>
                            <p className="text-sm text-white mb-1">Lima, Perú</p> */}
                        </div>
                        <div>
                            <p className='text-2xl italic mb-4'>Get in touch with me for any inquiry!</p>
                            <div className='py-4 border-b border-white flex items-center justify-between'>
                                <input className='text-white placeholder:text-white placeholder:opacity-65 bg-transparent outline-none w-[calc(100%-24px)] flex-1' placeholder='Your e-mail address' />
                                <button className='w-[6] flex-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill='white' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
