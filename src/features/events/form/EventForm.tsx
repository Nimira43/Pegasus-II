import type { AppEvent } from '../../../lib/types'

type Props = {
  setFormOpen: (isOpen: boolean) => void
  createEvent: (event: AppEvent) => void
}

export default function EventForm({
  setFormOpen,
  createEvent
}: Props) {
  const onSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries())
    createEvent(data)
  }

  return (
    <div className='card bg-grey-light-extra p-4 flex flex-col gap-3 w-full'>
      <h3 className='text-2xl font-medium text-center text-dark'>Create New Event</h3>
      <form
        action={onSubmit}
        className='flex flex-col gap-3 w-full'
      >
        <input 
          name='title'
          type='text' 
          className='input input-lg w-full'
          placeholder='Event Title'  
        />
        <input 
          name='category'
          type='text' 
          className='input input-lg w-full'
          placeholder='Category'  
        />
        <textarea  
          name='description'
          className='textarea textarea-lg w-full'
          placeholder='Description'  
        />
        <input 
          name='date'
          type='datetime-local' 
          className='input input-lg w-full'
          placeholder='Date'  
        />
        <input 
          name='city'
          type='text' 
          className='input input-lg w-full'
          placeholder='City'  
        />
        <input 
          name='venue'
          type='text' 
          className='input input-lg w-full'
          placeholder='Venue'  
        />
        <div className='flex justify-end w-full gap-3'>
          <button
            onClick={() => setFormOpen(false)}
            type='button'
            className='btn bg-main text-light hover:bg-main-dark btn-hover'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='btn bg-main text-light hover:bg-main-dark btn-hover'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}