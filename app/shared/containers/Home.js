import React from 'react'
import Container from 'shared/components/Container'
import Article from 'shared/components/Article'
import Posts from 'shared/config/posts'

const Home = () => {
  const getArticles = () => {
    return Posts.map((article, index) => {
      return (
        <Article post={article} key={index} />
      )
    })
  }
  return (
    <Container>
      {getArticles()}
    </Container>
  )
}

export default Home
