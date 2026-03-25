import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function BlogPage() {
  const { data, loading, error } = useFetch(
    'https://dummyjson.com/posts?limit=30'
  )

  const posts = data?.posts || []

  if (loading) return <p>Loading posts...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog</h1>

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <h3>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h3>

          <p>{post.body.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  )
}