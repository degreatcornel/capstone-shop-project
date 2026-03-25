export default function SkeletonCard() {
  return (
    <div
      style={{
        border: '1px solid #eee',
        borderRadius: '10px',
        padding: '15px',
        background: '#f5f5f5',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '200px',
          background: '#ddd',
          borderRadius: '8px',
          marginBottom: '10px',
        }}
      />

      <div
        style={{
          height: '15px',
          background: '#ddd',
          marginBottom: '10px',
          width: '80%',
        }}
      />

      <div
        style={{
          height: '15px',
          background: '#ddd',
          width: '50%',
        }}
      />
    </div>
  )
}