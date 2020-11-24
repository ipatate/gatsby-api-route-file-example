import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>The last posts</h1>
    <ul>
      {data.allRestApiPosts.nodes.map(post => (
        <li key={post.title}>
          <Link to={post.postPath}>{post.title}</Link>
        </li>
      ))}
    </ul>
    <Link to="/posts/">All posts</Link> <br />
  </Layout>
)

export const query = graphql`
  query {
    allRestApiPosts(limit: 3) {
      nodes {
        title
        postPath: gatsbyPath(
          filePath: "/posts/{restApiPosts.id}/{restApiPosts.title}"
        )
      }
    }
  }
`

export default IndexPage
