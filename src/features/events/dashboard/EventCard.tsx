import user from '../../../images/user.png'

export default function EventCard() {
  return (
    <div className='card card-border bg-grey-light-extra w-full'>
      <div className='card-body'>
        <div className='flex gap-3 items-center'>
          <figure className='card-figure w-14 rounded-lg'>
            <img 
              src={user}
              alt='User'  
            />
          </figure>
          <div>
            <h2 className='card-title'>Event Title</h2>
            <p className='text-sm text-grey-dark'>Hosted by John</p>  
          </div>
        </div>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, porro!</p>
        <div className='card-actions justify-end'>
          <button className='btn bg-main text-light hover:bg-main-dark btn-hover'>Click</button>
        </div>
      </div>
    </div>
  )
}