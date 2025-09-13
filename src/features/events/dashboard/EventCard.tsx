export default function EventCard() {
  return (
    <div className='card card-border bg-grey-light-extra w-96'>
      <div className='card-body'>
        <h2 className='card-title'>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, porro!</p>
        <div className='card-actions justify-end'>
          <button className='btn bg-main text-light hover:bg-main-dark btn-hover'>Click</button>
        </div>
      </div>
    </div>
  )
}