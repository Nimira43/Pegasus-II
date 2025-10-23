type Props = {
  setFormOpen: (isOpen: boolean) => void
}

export default function EventForm({
  setFormOpen
}: Props) {
  return (
    <div className='card bg-grey-light-extra p-4 flex flex-col gap-3 w-full'>
      <h3 className='text-2xl font-medium text-center text-dark'>Create New Event</h3>
      <form className='flex flex-col gap-3 w-full'>
        <input 
          type='text' 
          className='input input-lg w-full'
          placeholder='Event Title'  
        />
        <input 
          type='text' 
          className='input input-lg w-full'
          placeholder='Category'  
        />
        <textarea  
          className='textarea textarea-lg w-full'
          placeholder='Description'  
        />
        <input 
          type='text' 
          className='input input-lg w-full'
          placeholder='Date'  
        />
        <input 
          type='text' 
          className='input input-lg w-full'
          placeholder='City'  
        />
        <input 
          type='text' 
          className='input input-lg w-full'
          placeholder='Venue'  
        />
        <div className='flex justify-end w-full gap-3'>
          <button
            className='btn bg-main text-light hover:bg-main-dark btn-hover'
          >
            Cancel
          </button>
          <button
            className='btn bg-main text-light hover:bg-main-dark btn-hover'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}