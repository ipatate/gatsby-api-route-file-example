import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const PostPage = ({ data, params }) => {
  const n = Math.round(Math.random() * 9)
  return (
    <Layout>
      <SEO title={data.restApiPosts.title} />
      <h1>{data.restApiPosts.title}</h1>
      <i>
        <Link to={`/user/${data.allRestApiUsers.nodes[n].endpointId}`}>
          {data.allRestApiUsers.nodes[n].username}
        </Link>
      </i>
      <div>{data.restApiPosts.body}</div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    restApiPosts(id: { eq: $id }) {
      title
      body
    }
    allRestApiUsers {
      nodes {
        endpointId
        username
      }
    }
  }
`

export default PostPage
