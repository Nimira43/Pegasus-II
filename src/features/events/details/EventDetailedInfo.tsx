import { TiCalendarOutline, TiInfoLarge, TiLocationOutline } from 'react-icons/ti'
import { useAppSelector } from '../../../lib/stores/store'

export default function EventDetailedInfo() {
  const event = useAppSelector(state => state.event.selectedEvent)
  return (
    <div className='card bg-grey-4 rounded-lg'>
      <div className='flex flex-col align-middle'>
        <div className='flex items-center gap-x-3 border-b border-grey-3 py-3 pl-3 '>
          <TiInfoLarge className='size-8' />
          <span>{event?.description}</span>
        </div>
        <div className='flex items-center gap-x-3 border-b border-grey-3 py-3 pl-3 '>
          <TiCalendarOutline className='size-8' />
          <span>{event?.date}</span>
        </div>
        <div className='flex items-center gap-x-3 py-3 pl-3 '>
          <TiLocationOutline className='size-8' />
          <span>{event?.venue}</span>
        </div>
      </div>
    </div>
  )
}