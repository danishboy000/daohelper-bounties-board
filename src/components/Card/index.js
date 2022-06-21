import React from 'react'
import './card.scss'

export default function Card({itemData,color}) {
  return (
    <div className="cardCon">
        <h3 className="title">{itemData.title}</h3>
        <p className="description">{itemData.description}</p>

        <div className="bottom" style = {{backgroundColor:color}}>
            <span className="reward">Reward: {itemData.reward}</span>
            <span className="timeLeft">Time left: {itemData.timeLeft}</span>
        </div>
    </div>
  )
}
