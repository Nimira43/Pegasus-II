import { users } from '../../../lib/data/sampleData'
import type { AppEvent } from '../../../lib/types'

type Props = {
  setFormOpen: (isOpen: boolean) => void
  createEvent: (event: AppEvent) => void
  selectedEvent:(AppEvent | null)
}

export default function EventForm({
  setFormOpen,
  createEvent,
  selectedEvent
}: Props) {
  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: '',
  }
  const onSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries()) as unknown as AppEvent
    createEvent({
      ...data,
      id: crypto.randomUUID(),
      hostUid: users[0].uid,
      attendees: [{
        id: users[0].uid,
        displayName: users[0].displayName,
        photoURL: users[0].photoURL,
        isHost: true
      }]
    })
    setFormOpen(false)
  }

  return (
    <div className='card bg-grey-5 p-4 flex flex-col gap-3 w-full'>
      <h3 className='text-2xl font-medium text-center text-dark'>
        {
          selectedEvent
            ? 'Edit Event'
            : 'Create Event'
        }
      </h3>
      <form
        action={onSubmit}
        className='flex flex-col gap-3 w-full'
      >
        <input 
          defaultValue={initialValues.title}
          name='title'
          type='text' 
          className='event-form-input'
          placeholder='Event Title'  
        />
        <input 
          defaultValue={initialValues.category}
          name='category'
          type='text' 
          className='event-form-input'
          placeholder='Category'  
        />
        <textarea  
          defaultValue={initialValues.description}
          name='description'
          className='event-form-textarea'
          placeholder='Description'  
        />
        <input 
          defaultValue={
            initialValues.date
              ? new Date(initialValues.date)
                .toISOString()
                .slice(0, 16)
              : ''
          }
          name='date'
          type='datetime-local' 
          className='event-form-input'
          placeholder='Date'  
        />
        <input 
          defaultValue={initialValues.city}
          name='city'
          type='text' 
          className='event-form-input'
          placeholder='City'  
        />
        <input 
          defaultValue={initialValues.venue}
          name='venue'
          type='text' 
          className='event-form-input'
          placeholder='Venue'  
        />
        <div className='flex justify-end w-full gap-3'>
          <button
            onClick={() => setFormOpen(false)}
            type='button'
            className='btn event-btn'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='btn event-btn'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}