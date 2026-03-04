import { RiUser6Line, RiCalendar2Line, RiLogoutBoxRLine } from 'react-icons/ri'
import { useAppDispatch, useAppSelector } from '../../../lib/stores/store'
import { signOut } from '../../../features/account/accountSlice'
import { useNavigate } from 'react-router'

export default function UserMenu() {
  const navigate = useNavigate()
  const user = useAppSelector(state => state.account.user)
  const dispatch = useAppDispatch()
  
  const handleSignOut = () => {
    dispatch(signOut())
    navigate('/')
  }
  
  return (
    <div className='dropdown dropdown-bottom dropdown-end'>
      <div
        tabIndex={0}
        role='button'
        className='text-light uppercase font-medium m-1 gap-2 flex items-center hover:text-grey-3 transitioning'
      >
        <div className='avatar'>
          <div className='w-11 rounded-full'>
            <img
              src={user?.photoURL || '/user.png'}
              alt='User Avatar'
            />
          </div>
        </div>
        <span>
          {user?.displayName}
        </span>
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
        <li onClick={handleSignOut}>
          <div className='flex items-center gap-3'>
            <RiLogoutBoxRLine className='size-6' />
            Logout
          </div>
        </li>
      </ul>
    </div>
  )
}