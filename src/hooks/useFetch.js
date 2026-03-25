import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    // This is intentional so we can show loading state for each fetch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true)
    setError(null)

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        return res.json()
      })
      .then(data => {
        if (isMounted) {
          setData(data)
          setLoading(false)
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [url])

  return { data, loading, error }
}

export { useFetch }
export default useFetch


