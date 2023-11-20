import React from 'react'
import Cards from './Cards'
import data from './data.json';

export default function Benefits() {
  return (
    <section className="benefits">
        {data.map((card,index) =>(
            <Cards 
                key = {index}
                url = {card.url}
                heading = {card.heading}
                detail = {card.detail}
                className = {`card-${index}`}
            />
        ))}
        <div className="design_line"></div>
    </section>
  )
}
