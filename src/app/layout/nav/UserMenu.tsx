import { users } from '../../../lib/data/sampleData'
import { RiUser6Line, RiCalendar2Line, RiLogoutBoxRLine } from 'react-icons/ri'

export default function UserMenu() {
  return (
    <div className='dropdown dropdown-bottom dropdown-end'>
      <div
        tabIndex={0}
        role='button'
        className='text-light uppercase font-medium m-1 gap-2 flex items-center hover:text-grey-3 transitioning'
      >
        <div className='avatar'>
          <div className='w-11 rounded-full'>
            <img src={users[4].photoURL} alt='User Avatar' />
          </div>
        </div>
        <span>Amanda</span>
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content menu bg-light rounded z-1 w-52 p-2'
      >
        <li>
          <div className='flex items-center gap-3'>
            <RiUser6Line className='size-6' />
            My Profile
          </div>
        </li>
        <li>
          <div className='flex items-center gap-3'>
            <RiCalendar2Line className='size-6' />
            Create Event
          </div>
        </li>
        <div className='divider my-0'/>
        <li>
          <div className='flex items-center gap-3'>
            <RiLogoutBoxRLine className='size-6' />
            Logout
          </div>
        </li>
      </ul>
    </div>
  )
}