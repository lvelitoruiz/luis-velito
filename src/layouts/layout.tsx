import React, { ReactNode } from 'react'
import { BorderTop } from '../components/BorderTop'
import { BorderBottom } from '../components/BorderBottom'
import { BorderLeft } from '../components/BorderLeft'
import { BorderRight } from '../components/BorderRight'
import { MenuButtonResponsive } from '../components/MenuButtonResponsive'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='layout-wrapper overflow-hidden'>
      <section className='layout-container overflow-hidden'>
        <BorderTop />
        <BorderBottom />
        <BorderLeft />
        <BorderRight />
        { children }
      </section>
    </div>
  )
}
