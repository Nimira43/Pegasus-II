import type { Attendee } from '../../../lib/types'

type Props =  {
  attendees: Attendee[]
}

export default function EventAttendees({ attendees }: Props) {
  return (
    <div className='avatar-group -space-x-4 '>
      {attendees.map(attendee => (
          <div 
            key={attendee.id}
            className='avatar border-grey-2 border-2'
          >
            <div className='w-12'>
              <img 
                src={attendee.photoURL || '/user.png'} 
                alt="Attendees" 
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}