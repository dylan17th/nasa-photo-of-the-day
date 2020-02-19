import React from 'react'; 

export default function layout({title,url,date,explanation}){
    return (
        <div className='container'>
            <h2 className='Title'>{title}</h2>
            <img className='picture' src={url} alt='Picture of the day'></img>
            <p className='date'>Date: {date} </p>
            <p>{explanation}</p>
            <button className='button'><a href='https://api.nasa.gov/#apod'>Visit NASA API Here</a></button>
        </div>
    )
}