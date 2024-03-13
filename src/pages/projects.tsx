import { HeadFC } from 'gatsby';
import React from 'react'
import { Project } from '../components/Project';
import { Layout } from '../layouts/layout';

export const projects = () => {
  return (
    <Layout>
      <Project />
    </Layout>
  )
}

export default projects;

export const Head: HeadFC = () => <title>My Projects</title>
