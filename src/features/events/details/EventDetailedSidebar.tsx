import { Fragment } from 'react/jsx-runtime'
import { useAppSelector } from '../../../lib/stores/store'

export default function EventDetailedSidebar() {
  const event = useAppSelector(state => state.event.selectedEvent)
  return (
    <div className='card bg-grey-4'>
      <div className='card-title rounded-t-lg justify-center bg-main text-light py-2'>
        {event?.attendees.length} are going
      </div>
      <div className='card-body'>
        <div className='flex flex-col gap-3'>

          {event?.attendees.map((attendee, index) => (
            <Fragment key={attendee.id}>
              <div className='flex gap-3 align-middle justify-between items-center'>
                <div className='flex gap-3 items-center'>
                  <div className='avatar'> 
                    <div className='w-16 rounded'>
                      <img 
                        src={attendee.photoURL || '/user.png'}
                        alt='User image' 
                      />
                    </div>
                  </div>
                  <span className='text-lg'>
                    {attendee.displayName}
                  </span>
                </div>
                {event.hostUid === attendee.id && (
                  <div className='badge bg-main text-light'>
                    Host
                  </div>
                )}
                
              </div>
              {index < event.attendees.length - 1 && (
                <div className='divider my-0'></div>
              )}
            </Fragment>
          )) }

        </div>
      </div>
    </div>
  )
}