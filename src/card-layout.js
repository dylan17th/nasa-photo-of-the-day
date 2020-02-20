import React from 'react'; 
import styled from 'styled-components';

const NasaCard = styled.div`
    width:35%;
    display:flex;
    align-content:center; 
    text-align:center;
    justify-content:space-around;
    flex-wrap:wrap;
    border: black solid 2px;
    padding: 1rem;
    border-radius:10px;
    background-image: linear-gradient( to top , #d38601, #7f7f7f);
    color:black;
    `;
const NasaImage = styled.img`
width:100%;
object-fit: scale;
flex-shink:down;
height:300px;
border-radius:20px;
`;
const Heading = styled.h2`
font-size:2rem;
margin:.5rem;
`;
const ImageBorder = styled.div`
border-top: black dashed 2px;
padding:1rem;
`;
const Paragraph = styled.p`
border-bottom: black dashed 2px;
padding:1rem;
margin-top:-1rem;
line-height:2rem;
font-size: .7rem;
`;
const NasaButton = styled.button`
width:50%;
color:white;
background-color:black;
padding: 1rem 3rem;
border-radius:10px; 
border:none;
`;
const NasaAnchor = styled.a`
text-decoration:none;
color:white;
`
export default function layout({title,url,date,explanation}){
    return (
        <NasaCard>
            <Heading>{title}</Heading>
            <ImageBorder>
                <NasaImage src={url} alt='Picture of the day'></NasaImage>
            </ImageBorder>
            <p className='date'>Date: {date} </p>
            <Paragraph>{explanation}</Paragraph>
            <NasaButton><NasaAnchor href='https://api.nasa.gov/#apod'>Visit NASA API Here</NasaAnchor></NasaButton>
        </NasaCard>
    )
}