import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import Layout from './card-layout';


function CardDataLoader() {
    const [data, setData] = useState({});
    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=CRkHge96oueMyGD3EFCdqUo5GyMouMOhEFCLqk3O').then(response =>  setData(response.data)).catch(err => console.log(err))
    }, [])
    return (
    <div>
        <h1>The NASA Picture of The Day</h1>
       <Layout date={data.date} title={data.title} explanation={data.explanation} url={data.hdurl}/>
    </div>
    )
}

export default CardDataLoader; 
//my NASA key CRkHge96oueMyGD3EFCdqUo5GyMouMOhEFCLqk3O//