import React from 'react'
import Link from 'gatsby-link'

import Container from '../components/Container'

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Container>
      {
        posts.filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post}) => {
            console.log(post)
            return (
              <Container>
                <h1>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h1>
                <h2>
                  {post.frontmatter.date}
                </h2>
                <p>{post.excerpt}</p>
              </Container>
            )
          })
      }
    </Container>
  )
}

export const pageQuery = graphql`
  query Query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            tags
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`

export default Blog