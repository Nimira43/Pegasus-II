import { NavLink, useNavigate } from 'react-router'
import UserMenu from './UserMenu'
import { useAppDispatch, useAppSelector } from '../../../lib/stores/store'
import { signIn } from '../../../features/account/accountSlice'

export default function Navbar() {
  const navigate = useNavigate()
  const user = useAppSelector(state => state.account.user)
  const dispatch = useAppDispatch()

  const handleSignIn = () => {
    dispatch(signIn())
    navigate('/events')
  }

  return (
    <header className='px-3 w-full fixed top-0 z-50 bg-main'>
      <div className='flex align-middle items-center px-10 mx-auto gap-6 cursor-pointer'>
        <div className='h-16 text-light flex items-center gap-3 pr-6'>
          <NavLink to='/'>
            <span className='text-light text-3xl logo'>
              Pegasus II
            </span>
          </NavLink>
        </div>
        <nav className='flex gap-3 my-2 uppercase  text-light '>
          <NavLink
            to='/events'
            className='nav-link'
          >
            Events
          </NavLink>
          <NavLink
            to='/createEvent'
            className='nav-link'
          >
            Create
          </NavLink>
        </nav>
        <div className='flex align-middle ml-auto gap-3'>
          {user ? (
            <UserMenu />
          ) : (
            <>
              <button
                onClick={handleSignIn}
                className='btn nav-btn'
              >
                Login
              </button>
              <button className='btn nav-btn'>Register</button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}