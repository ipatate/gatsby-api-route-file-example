import React, { useEffect, useState } from "react"
import Axios from "axios"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = ({ params }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      )
      setUser(data)
    }
    fetchData()
  }, [params])
  return (
    <Layout>
      {user ? (
        <>
          <SEO title={user.name} />
          <h1>{user.name}</h1>
          <h2>{user.username}</h2>
          <div>{user.email}</div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  )
}

export default IndexPage
