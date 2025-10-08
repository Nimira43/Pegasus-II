import user from '/user.png'
import EventAttendees from './EventAttendees'
import type { AppEvent } from '../../../lib/types'

type Props = {
  event: AppEvent
}

export default function EventCard({event}: Props) {
  return (
    <div className='card card-border bg-grey-light-extra w-full'>
      <div className='card-body'>
        <div className='flex gap-3 items-center'>
          <figure className='card-figure w-14 rounded-lg'>
            <img 
              src={user}
              alt='User'  
            />
          </figure>
          <div>
            <h2 className='card-title font-medium'>{event.title}</h2>
            <p className='text-sm text-grey-dark'></p>  
          </div>
        </div>

        <div className='bg-grey-light my-3 px-4 py-2 rounded-lg'>
          <EventAttendees />
        </div>
        
        <div className='card-actions flex'>
          <div className='flex flex-1'>Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, iusto?</div>
          <button className='btn bg-main text-light hover:bg-main-dark btn-hover'>Click</button>
        </div>
      </div>
    </div>
  )
}