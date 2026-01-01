import EventAttendees from './EventAttendees'
import type { AppEvent } from '../../../lib/types'

type Props = {
  event: AppEvent
  formToggle: (event: AppEvent) => void
}

export default function EventCard({event, formToggle}: Props) {
  const host = event.attendees.find(x => x.id === event.hostUid)

  return (
    <div className='card card-border bg-grey-5 w-full'>
      <div className='card-body'>
        <div className='flex gap-3 items-center'>
          <figure className='card-figure w-14 rounded-lg'>
            <img 
              src={host?.photoURL || '/user.png'}
              alt='User'  
            />
          </figure>
          <div>
            <h2 className='card-title font-medium'>{event.title}</h2>
            <p className='text-sm text-grey-1'>Hosted by {host?.displayName}</p>  
          </div>
        </div>

        <div className='bg-grey-4 my-3 px-4 py-2 rounded-lg'>
          <EventAttendees 
            attendees={event.attendees}
          />
        </div>
        
        <div className='card-actions flex'>
          <div className='flex flex-1'>{event.description}</div>
          <button
            onClick={() => formToggle(event)}
            className='btn event-btn'
          >
            View
          </button>
        </div>
      </div>
    </div>
  )
}