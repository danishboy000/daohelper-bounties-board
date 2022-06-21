import React from 'react'
import {Draggable} from 'react-beautiful-dnd'
import Card from '../Card/'
import './column.scss'

export default function Column({items,title,color}) {
  return (
    <div className = 'column'>
        <div className="colTitle" style = {{borderBottomColor:color}}>
            {title}
        </div>
        <div className="colBody">
        {
            
            
            items.map((item,index) => {
            
            return (
                
                   
                <Draggable draggableId = {item.id} key = {item.id} index = {index}>
                {
                (provided,snapshot) => {
                    return(
                    <div
                        ref = {provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style = {
                        {
                            userSelect:'none',
                            ...provided.draggableProps.style
                        }
                        }

                    >
                        <Card itemData = {item} color = {color}/>
                    </div>
                    )
                }
                }
                </Draggable>
                
            )
            })
        }
        </div>
    </div>
  )
}
