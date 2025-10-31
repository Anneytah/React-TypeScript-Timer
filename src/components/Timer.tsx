import React from 'react'
import { type Timer as TimerProps } from '../store/ContextApi'


const Timer = ({name, duration}: TimerProps) => {
  return (
    <div>
        <form>
            <label>Name</label>
            <input type='text' />
            <label>Duration</label>
            <input type='text' />
        </form>
        <h2>{name}</h2>
        <p>{duration}</p>
    </div>
  )
}

export default Timer