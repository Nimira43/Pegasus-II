import EventAttendees from './EventAttendees'
import type { AppEvent } from '../../../lib/types'

type Props = {
  event: AppEvent
}

export default function EventCard({event}: Props) {
  const host = event.attendees.find(x => x.id === event.hostUid)

  return (
    <div className='card card-border bg-grey-light-extra w-full'>
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
            <p className='text-sm text-grey-dark'>Hosted by {host?.displayName}</p>  
          </div>
        </div>

        <div className='bg-grey-light my-3 px-4 py-2 rounded-lg'>
          <EventAttendees 
            attendees={event.attendees}
          />
        </div>
        
        <div className='card-actions flex'>
          <div className='flex flex-1'>{event.description}</div>
          <button className='btn bg-main text-light hover:bg-main-dark btn-hover'>View</button>
        </div>
      </div>
    </div>
  )
}