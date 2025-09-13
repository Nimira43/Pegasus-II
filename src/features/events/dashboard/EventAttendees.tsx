import user from '../../../images/f6.jpg'

export default function EventAttendees() {
  return (
    <div className='avatar-group -space-x-4 '>
      {Array
        .from({ length: 5 })
        .map((_, index) => (
          <div 
            key={index}
            className='avatar border-grey-medium border-2'
          >
            <div className='w-12'>
              <img 
                src={user} 
                alt="Attendees" 
              />
            </div>

          </div>
        ))
      }
    </div>
  )
}