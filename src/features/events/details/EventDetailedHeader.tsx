export default function EventDetailedHeader() {
  return (
    <div className='card bg-light'>
      <figure className='h-64 brightness-50'>
        <img 
          src={`/images/sport.jpg`}
          alt='event category image'
          className='w-full object-cover'
        />
      </figure>
      <div className='card-body text-light justify-end absolute bottom-0 w-full'>
        <div className='flex justify-between'>
          <div>
            <h2 className='card-title text-4xl font-medium'>Event Title</h2>
            <p>Event Date</p>
            <p>Hosted by John</p>
          </div>
          <div className='flex flex-col justify-end'>
            <button className='btn nav-btn'>Join Event</button>
          </div>
        </div>  
      </div>
    </div>
  )
}