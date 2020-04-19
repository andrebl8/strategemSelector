import React from 'react'

const Card = ({ name, description, faction, cost, tags }) => {
    return (
        <div className='card'>
            <h3>{name}</h3>
            <h4>CP: {cost}</h4>
            <p>{description}</p>
            <span>tags: {tags.map((tag) => <span className='tag'>{tag} </span>)}</span>
        </div>
    )
}

export default Card;