import React from 'react'
import './style.css';

export const TextError = ({ children }) => {
  return (
    <div className="error">
      {children}
    </div>
  )
}

export default TextError;
