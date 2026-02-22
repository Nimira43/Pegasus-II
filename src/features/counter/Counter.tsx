import { useAppDispatch, useAppSelector } from '../../lib/stores/store'
import { decrement, increment, incrementByAmount } from './counterSlice'

export default function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className='card bg-grey-5 p-4 flex flex-col gap-4'>
      <div className='text-center'>
        <div>
          <div className='font-medium uppercase text-xl'>
            Counter
          </div>
          <div className='font-medium text-7xl'>
            {count}
          </div>
        </div>
      </div>
      <div className='join flex justify-center gap-2'>
        <button
          onClick={() => dispatch(decrement())}
          className='btn event-btn join-item flex-1'
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(increment())}
          className='btn dark-btn join-item flex-1'
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className='btn event-btn join-item flex-1'
        >
          Add 5
        </button>
      </div>
    </div>
  )
}