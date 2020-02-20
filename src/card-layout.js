import React from 'react'; 
import styled from 'styled-components';

const NasaCard = styled.div`
    width:50%;
    display:flex;
    align-content:center; 
    text-align:center;
    justify-content:space-around;
    flex-wrap:wrap;
    border: black solid 2px;
    padding: 1rem;
    border-radius:10px;
    background-image: linear-gradient( to top , #d38601, #7f7f7f);
    color:white;
    `;
const NasaImage = styled.img`
width:100%;
object-fit: scale;
flex-shink:down;
max-width:100%;
height:500px;
border-radius:20px;
`
const Heading = styled.h2`
font-size:2rem;
`

export default function layout({title,url,date,explanation}){
    return (
        <NasaCard>
            <Heading>{title}</Heading>
            <NasaImage src={url} alt='Picture of the day'></NasaImage>
            <p className='date'>Date: {date} </p>
            <p>{explanation}</p>
            <button className='button'><a href='https://api.nasa.gov/#apod'>Visit NASA API Here</a></button>
        </NasaCard>
    )
}