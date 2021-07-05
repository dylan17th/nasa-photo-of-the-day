import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import Layout from './card-layout';
import styled from 'styled-components';

const Card_Data = styled.div`
display:flex;
justify-content:space-around;
flex-wrap: wrap;
`
const Card_Data_heading = styled.h1`
width:100%;
color:white;
text-align: center;
`


function CardDataLoader() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=CRkHge96oueMyGD3EFCdqUo5GyMouMOhEFCLqk3O').then(response =>  setData(response.data)).catch(err => console.log(err))
    }, [])
    return (
    <Card_Data>
        <Card_Data_heading>The NASA Picture of The Day</Card_Data_heading>
       <Layout date={data.date} title={data.title} explanation={data.explanation} url={data.hdurl}/>
    </Card_Data>
    )
}

export default CardDataLoader; 
//my NASA key CRkHge96oueMyGD3EFCdqUo5GyMouMOhEFCLqk3O//