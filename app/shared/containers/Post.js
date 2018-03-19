import PropTypes from 'prop-types'
import React from 'react'
import renderHTML from 'react-render-html'
import Container from 'shared/components/Container'
import Posts from 'shared/config/posts'

const Post = ({ match }) => {
  const getPost = () => {
    const pid = match.params.id
    const { title, desc } = Posts.find((post) => post.id === parseInt(pid))
    return (
      <article>
        <h4>{title}</h4>
        <div>{renderHTML(desc)}</div>
      </article>
    )
  }
  return (
    <Container>
      {getPost()}
    </Container>
  )
}

Post.propTypes = {
  match: PropTypes.object
}

export default Post
