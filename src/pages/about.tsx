import { Layout } from '../layouts/layout'
import React from 'react'
import { AboutMe } from '../components/AboutMe'
import { HeadFC } from 'gatsby'

const about = () => {
  return (
    <Layout>
      <AboutMe />
    </Layout>
  )
}

export default about;

export const Head: HeadFC = () => <title>About Me</title>
