import React from 'react'


type InputProps = {
    label: string,
    id: string,
}

const Input = ({label, id} : InputProps) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} type='text'/>
    </div>
  )
}

export default Input