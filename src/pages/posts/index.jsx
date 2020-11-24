import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"

function PostsPage(props) {
  return (
    <Layout>
      <ul>
        {props.data.allRestApiPosts.nodes.map(post => (
          <li key={post.title}>
            <Link to={post.postPath}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allRestApiPosts {
      nodes {
        title
        postPath: gatsbyPath(
          filePath: "/posts/{restApiPosts.id}/{restApiPosts.title}"
        )
      }
    }
  }
`

export default PostsPage
