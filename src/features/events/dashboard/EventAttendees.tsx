export default function EventAttendees() {
  return (
    <div className='avatar-group'>
      {Array
        .from({ length: 5 })
        .map((_, index) => (
          <div 
            key={index}
            className='avatar'
          >
            
          </div>
        ))
      }
    </div>
  )
}