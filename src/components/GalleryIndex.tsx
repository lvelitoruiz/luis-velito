import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react'

export const GalleryIndex = ({ link = true }: any) => {

  const { allWpPost } = useStaticQuery(graphql`{
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
              }
            }
          }
        }
      }
  `);


  return (
    <div className={`grid grid-cols-12 md:pb-[44px] md:px-[44px] items-stretch ${link ? '' : 'mb-20'}`}>

      {
        allWpPost.edges.map((item: any, index: number) => {
          return (
            <div className="col-span-12 md:col-span-6 lg:col-span-4" key={index}>
              <div className="relative cursor-pointer h-80">
                <img src={item.node.projectPosts.galleryImage.node.publicUrl} alt={item.node.projectPosts.legendGallery} className="block w-full object-cover h-full" />
                <Link to={`/projects/${item.node.slug}`}>
                  <div className={`absolute top-0 bottom-0 left-0 right-0 h-full flex justify-end flex-col p-5 w-full opacity-0 bg-opacity-0 transition duration-150 ease-linear hover:bg-opacity-60 hover:opacity-100`} style={{ backgroundColor: item.node.projectPosts.color }}>
                    <p className="text-[#1C1B20] text-lg font-semibold italic mb-1">{item.node.projectPosts.titleGallery}</p>
                    <p className="text-sm text-white leading-[18px] font-medium" dangerouslySetInnerHTML={{ __html: item.node.projectPosts.descriptionGallery }}></p>
                  </div>
                </Link>
              </div>
            </div>
          )
        })
      }

      {
        link && <div className="col-span-12 bg-[#F8F8F8] text-center py-10">
          <Link className="text-[20px] g-link" to="/projects"><span className="z-10 relative text-black">Show all proyects</span></Link>
        </div>
      }
    </div>
  )
}
