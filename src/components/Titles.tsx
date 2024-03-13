import React from 'react'
import Vector from '../images/vector.svg'
import VectorBlack from '../images/vector-black.svg'

export const Titles = ({upper,lower,color,vector}: any) => {
    return (
        <>
            {
                vector === 'ligth' ?
                <Vector /> : <VectorBlack />
            }
            <h2 className={`text-[${color}] fw-gb text-[70px] md:text-[90px] leading-none mb-10`}>
                {upper} <br />
                {lower}
            </h2>
        </>
    )
}
