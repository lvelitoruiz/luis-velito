import { HeadFC, PageProps } from 'gatsby';
import React, { useEffect } from 'react'
import { Layout } from './layout';
import { ProjectCentral } from '../components/ProjectCentral';

const projectsLayout: React.FC<PageProps> = ({ pageContext }: any) => {

  return (
    <Layout>
      <ProjectCentral information={pageContext} />
    </Layout>
  )
}

export default projectsLayout;

export const Head: HeadFC = () => <title>Project</title>
