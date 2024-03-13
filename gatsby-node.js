exports.createPages = async function ({ graphql, actions, reporter }) {
    const { data } = await graphql(
        `{
          allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "projects"}}}}}) {
            edges {
              node {
                slug
                title
                projectPosts {
                  color
                  descriptionGallery
                  legendGallery
                  titleGallery
                  galleryImage {
                    node {
                      publicUrl
                    }
                  }
                  description1
                  description2
                  descriptionSection1
                  descriptionSection2
                  descriptionSection3
                  descriptionSection4
                  image1 {
                    node {
                      publicUrl
                    }
                  }
                  image2 {
                    node {
                      publicUrl
                    }
                  }
                  imageSection3 {
                    node {
                      publicUrl
                    }
                  }
                  imageSection4 {
                    node {
                      publicUrl
                    }
                  }
                  legend
                  link
                  subtitle
                  title
                  techs {
                    link
                    text
                  }
                  titleSection1
                  titleSection2
                  titleSection3
                  titleSection4
                  centralGallery {
                    nodes {
                      publicUrl
                    }
                  }
                }
              }
            }
          }
        }
      `
    )
    if (data.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    const elements = data.allWpPost.edges;
    elements.forEach(edge => {
        const slug = edge.node.slug
        const info = edge.node
        actions.createPage({
          path: `/projects/${slug}`,
          component: require.resolve(`./src/layouts/projectsLayout.tsx`),
          context: { slug: slug, info: info },
        });
      })
  }