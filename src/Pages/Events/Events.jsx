import React, { useEffect, useState } from 'react'
import "./events.css"
import { CiFilter } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import Countdown from '../../Components/Countdown';




export default function Events() {

  const [events, SetEvents] = useState([])

  useEffect(()=> {
    fetch("/Data/EventListing.json")
    .then((res) => res.json())
    .then((data) => SetEvents(data))
    .catch((err) => console.log(err.message))
  }, [])
  return (
    <>
  {/* events hero section */}
    <div className='events'>
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 text-center '>
      <h1 className='text-white fw-bold fs-1'>Explore Upcoming Events</h1>
      <p className='text-white text-sm w-50'> A collection of upcoming events you can attend on campus, from cultural fests, sports events, workshops, and more.</p>
    </div>

  
  <div className="">
  <div className=" justify-content-center">
    <div className="filterCard bg-white py-4 px-4 shadow-lg rounded-2 d-flex col-12 col-md-10 col-lg-8">
     <form className='filterForm'>
      <input type='date' />
      <input type='text' placeholder='Event Name'/>
        <select className="">
          <option value="">Category</option>
          <option value="sports">Sports</option>
          <option value="cultural">Cultural</option>
          <option value="department">Department</option>
          <option value="technical">Technical</option>
        </select>

        <button className='rounded-2'><CiFilter className='filterIcon'/></button>
     </form>
    </div>
  </div>
</div>

    </div>


    <div className='eventsContainer container'>

    {
      events.map((event) => {
        return(
        <div className='eventCard bg-white' key={event.id}>
        <img src={event.image} alt='Event Thumbnail' className='image-fluid'/>
        <Countdown date={event.date} />
        

        <div className='p-3'>
        <h4 className='fw-bold mt-4'>{event.title}</h4>
        <p>{event.description}</p>

        <div className='info'>
          <IoLocationOutline />
          <p className=''>{event.venue}</p>
        </div>

      <div className='info'>
        <LuCalendarDays />
        <p className=''>{event.date} {event.time}</p>
      </div>
   </div>
    </div>

        )
      })
    }

   
      
    </div>

  
    </>
  )
}
