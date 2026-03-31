import { GiPegasus } from 'react-icons/gi'
import { Link } from 'react-router'

export default function HomePage() {
  return (
    <div className='hero'>
      <div className='hero-content text-center'>
        <div className='max-w-2xl flex flex-col items-center'>
          <GiPegasus className='size-96 text-main' />
          <h1 className='text-5xl py-6 logo text-main font-bold'>
            Pegasus II
          </h1>
          <Link 
            className='btn btn-lg event-btn'
            to='/events'
          >
            View Events
          </Link>
        </div>
      </div>
    </div>
  )
}