import React from 'react'
import './Input.css';
function Input({ type }) {
  return (
    <div>
      <input className="inp" type={type} />
    </div>
  )
}

export default Input