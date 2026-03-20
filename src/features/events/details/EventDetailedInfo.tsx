import { TiCalendarOutline, TiInfoLarge, TiLocationOutline } from 'react-icons/ti'

export default function EventDetailedInfo() {
  return (
    <div className='card bg-grey-5'>
      <div className='flex flex-col align-middle'>
        <div className='flex items-center gap-x-3 border-b border-grey-3 py-3 pl-3 '>
          <TiInfoLarge className='size-8' />
          <span>Event Description</span>
        </div>
        <div className='flex items-center gap-x-3 border-b border-grey-3 py-3 pl-3 '>
          <TiCalendarOutline className='size-8' />
          <span>Event Date</span>
        </div>
        <div className='flex items-center gap-x-3 py-3 pl-3 '>
          <TiLocationOutline className='size-8' />
          <span>Event Location</span>
        </div>
      </div>
    </div>
  )
}