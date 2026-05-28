import { TiCalendarOutline, TiInfoLarge, TiLocationOutline } from 'react-icons/ti'
import { useAppSelector } from '../../../lib/stores/store'
import { useState } from 'react'
import MapComponent from '../../../app/shared/components/MapComponent'

export default function EventDetailedInfo() {
  const [mapOpen, setMapOpen] = useState(false)
  const event = useAppSelector(
    state => state.event.selectedEvent
  )

  return (
    <div className='card bg-grey-4 rounded'>
      <div className='flex flex-col align-middle'>
        
        <div className='flex items-center gap-x-3 border-b border-grey-3 py-3 pl-3 '>
          <TiInfoLarge className='size-8' />
          <span>
            {event?.description}
          </span>
        </div>
        
        <div className='flex items-center gap-x-3 border-b border-grey-3 py-3 pl-3 '>
          <TiCalendarOutline className='size-8' />
          <span>
            {event?.date}
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-3 py-3 pl-3 '>
            <TiLocationOutline className='size-8' />
            <span>
              {event?.venue}
            </span>
          </div>
          <button
            onClick={() => setMapOpen(!mapOpen)}
            className='btn main-btn mr-2'
          >
            {mapOpen
              ? 'Hide Map'
              : 'Show Map'
            }
          </button>
        </div>
      </div>
      {mapOpen && event && (
        <div className='h-64'>
          <MapComponent
            position={[event.latitude, event.longitude]}
            venue={event.venue}
          />
        </div>
      )}
    </div>
  )
}