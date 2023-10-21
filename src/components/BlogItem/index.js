// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsDetails} = props
  const {title, description, publishedDate} = blogsDetails

  return (
    <li className="list-item-container">
      <div className="post-container">
        <h1 className="post-title">{title}</h1>
        <p className="post-date">{publishedDate}</p>
      </div>
      <p className="post-description">{description}</p>
    </li>
  )
}

export default BlogItem
