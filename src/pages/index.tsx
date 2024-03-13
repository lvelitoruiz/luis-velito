import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../layouts/layout"
import { Home } from "../components/Home"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
