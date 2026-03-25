import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function PostPage() {
  const { id } = useParams()

  const { data: post, loading, error } = useFetch(
    `https://dummyjson.com/posts/${id}`
  )

  if (loading) return <p>Loading post...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div style={{ padding: '20px' }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}