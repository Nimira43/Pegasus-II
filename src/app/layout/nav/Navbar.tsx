type Props = {
  setFormOpen: (isOpen: boolean) => void
}

export default function Navbar({
  setFormOpen
}: Props) {
  return (
    <header className='p-3 w-full fixed top-0 z-50 bg-main'>
      <div className='flex align-middle items-center px-10 mx-auto gap-6 cursor-pointer'>
        <a className='max-h-16 text-light flex items-center gap-3 pr-6'>
          <h3 className='text-2xl text-light logo'>Pegasus II</h3>
        </a>
        <nav className='flex gap-3 my-2 uppercase text-lg text-light '>
          <a className='font-normal hover:text-grey-3 transitioning'>Events</a>
          <a
            className='font-normal hover:text-grey-3 transitioning'
            onClick={() => setFormOpen(true)}
          >
            Create
          </a>
        </nav>
        <div className='flex align-middle ml-auto gap-3'>
          <button className='btn bg-light text-main hover:bg-grey-3 transitioning'>Login</button>
          <button className='btn bg-light text-main hover:bg-grey-3 transitioning'>Register</button>
        </div>
      </div>
    </header>
  )
}