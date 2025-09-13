export default function Navbar() {
  return (
    <header className='p-3 w-full fixed top-0 z-50 bg-main'>
      <div className='flex align-middle items-center px-10 mx-auto gap-6'>
        <a className='max-h-16 text-light flex items-center gap-3 pr-6'>
          <h3 className='text-2xl font-medium text-light logo'>Pegasus</h3>
        </a>
      </div>
    </header>
  )
}