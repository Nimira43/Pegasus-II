import { users } from '../../../lib/data/sampleData'

export default function EventDetailedChat() {
  return (
    <div className='card bg-grey-4'>
      <div className='card-title rounded-t-lg justify-center bg-main text-light py-2'>
        Discuss about this Event
      </div>
      <div className='card-body'>
        <div className='chat chat-start'>
          <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
              <img src={users[2].photoURL} alt='User image' />
            </div>
          </div>
          <div className='chat-bubble bg-main-light font-medium'>This is the start of the chat.</div>
        </div>
      </div>
    </div>
  )
}