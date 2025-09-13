import EventCard from "./EventCard";

export default function EventDashboard() {
  return (
    <div className='flex flex-row w-full'>
      <div className='w-3/5'>
        <EventCard />
      </div>
      <div className='w-2/5'>Right Content</div>
    </div>
  )
}