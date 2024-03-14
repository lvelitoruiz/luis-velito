import React, { ReactNode } from 'react'
import { BorderTop } from '../components/BorderTop'
import { BorderBottom } from '../components/BorderBottom'
import { BorderLeft } from '../components/BorderLeft'
import { BorderRight } from '../components/BorderRight'
import { ParallaxProvider } from 'react-scroll-parallax';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ParallaxProvider>
      <div className='layout-wrapper overflow-hidden'>
        <section className='layout-container overflow-hidden'>
          <BorderTop />
          <BorderBottom />
          <BorderLeft />
          <BorderRight />
          {children}
        </section>
      </div>
    </ParallaxProvider>
  )
}
