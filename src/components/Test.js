import React from 'react'
import { useState } from 'react';

export default function Test({title, imgUrl, para}) {
    const [likes, setLikes] = useState(0)

    function handleClick () {
      setLikes(likes + 1);
    }
    //console.log(props)
  return (
    <div className='card--creature'>
        <h2>{title}</h2>
        <img src={imgUrl} />
        <p>{para}</p>
        <div style={{cursor: 'pointer'}} onClick={handleClick}>😎 {likes}</div>
    </div>
  )
}

