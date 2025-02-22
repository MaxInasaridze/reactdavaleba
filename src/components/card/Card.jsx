import React from 'react'
import "./Card.css"

export default function Card({info}) {
  return (
    <div className="card">
        <img src={info.img} alt="" />
        <h4>{info.firstName}</h4>
        <h5>{info.lastName}</h5>
      </div>
  )
}
