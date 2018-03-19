import PropTypes from 'prop-types'
import React from 'react'
import renderHTML from 'react-render-html'
import { Link } from 'react-router-dom'

const Article = ({ post }) => (
  <article>
    <h1><Link to={`/post/${post.id}`}>{post.title}</Link></h1>
    <div className="text-justify">
      {renderHTML(post.desc)}
    </div>
    <hr/>
  </article>
)

Article.propTypes = {
  post: PropTypes.object
}

export default Article
