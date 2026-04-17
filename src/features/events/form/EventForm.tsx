import { useNavigate, useParams } from 'react-router'
import { users } from '../../../lib/data/sampleData'
import { useAppDispatch, useAppSelector } from '../../../lib/stores/store'
import { createEvent, selectEvent, updateEvent } from '../eventSlice'
import { useEffect } from 'react'
import { useForm, type FieldValues } from 'react-hook-form'
import type { AppEvent } from '../../../lib/types'

export default function EventForm() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  
  const selectedEvent = useAppSelector(state => state.event.selectedEvent)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isValid
    }
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      title: '',
      category: '',
      description: '',
      date: '',
      city: '',
      venue: '',  
    }
  }) 

  useEffect(() => {
    if (id) {
      dispatch(selectEvent(id))
      if (selectedEvent) {
        reset({
          ...selectedEvent,
          date: new Date(selectedEvent.date)
            .toISOString()
            .slice(0, 16),
        })
      }
    } else {
      dispatch(selectEvent(null))
    }
  }, [dispatch, id, selectedEvent, reset])

  const onSubmit = (data: FieldValues) => {    
    if (selectedEvent) {
      dispatch(updateEvent({ ...selectedEvent, ...data }))
      navigate(`/events/${selectedEvent.id}`)
      return
    } else {
      const id = crypto.randomUUID()
      const newEvent = {
        ...data,
        id,
        hostUid: users[0].uid,
        attendees: [{
          id: users[0].uid,
          displayName: users[0].displayName,
          photoURL: users[0].photoURL,
          isHost: true
        }]
      }
      dispatch(createEvent(newEvent as AppEvent))
      navigate(`/events/${id}`)
    }    
  }

  return (
    <div className='card bg-grey-5 p-4 flex flex-col gap-3 w-full'>
      <h3 className='text-2xl font-medium text-center text-dark'>
        { selectedEvent ? 'Edit Event' : 'Create Event' }
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-3 w-full'
      >
        <input 
          {...register(
            'title',
            {required: 'Title is required'}
          )}
          type='text' 
          className={
            `event-form-input ${
              errors.title 
                ? 'border-red-500'
                : ''
            }`
          }
          placeholder='Event Title'
        />
        {errors.title && (
          <div className='text-red-500'>
            {errors.title.message}
          </div>
        )}
        <input 
          {...register('category')}
          type='text' 
          className='event-form-input'
          placeholder='Category'  
        />
        <textarea  
          {...register('description')}
          className='event-form-textarea'
          placeholder='Description'  
        />
        <input 
          {...register('date')}
          type='datetime-local' 
          className='event-form-input'
          placeholder='Date'  
        />
        <input 
          {...register('city')}
          type='text' 
          className='event-form-input'
          placeholder='City'  
        />
        <input 
          {...register('venue')}
          type='text' 
          className='event-form-input'
          placeholder='Venue'  
        />
        <div className='flex justify-end w-full gap-3'>
          <button
            onClick={() => navigate(-1)}
            type='button'
            className='btn dark-btn'
          >
            Cancel
          </button>
          <button
            disabled={!isValid}
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