import React, { useEffect, useState } from 'react'
import './TrafficLight.css'
const TrafficLight = () => {

    const [light, setLight] = useState('red')

    useEffect(()=>{
        const interval = setInterval(() => {
            setLight((prev)=>(prev == 'red' ? 'green' : (prev) == 'green' ? 'yellow' : 'red'))
        },3000)

        return() => clearInterval(interval)
    },[])

  return (
    <div className='container'>
      <div className="traffic-lights">
        <div className={`light red ${light == 'red' ? 'active' : ''}`}></div>
        <div className={`light yellow ${light == 'yellow' ? 'active' : ''}`}></div>
        <div className={`light green ${light == 'green' ? 'active' : ''}`}></div>
      </div>
    </div>
  )
}

export default TrafficLight
