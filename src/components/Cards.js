import React from 'react'

export default function Cards(props) {
  return (
    <div className={`cards ${props.className}`}>
        <div className="icon">
            <img src= {props.url} alt=''></img>
        </div>
        <div className="content">
            <h2>{props.heading}</h2>
            <p>{props.detail}</p>
        </div>
    </div>
  )
}
