import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const  [service,setService] =  useState({});
    const { serviceId } = useParams();
    useEffect(()=>{
        const url = `http://localhost:5000/services/${serviceId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data));
    },[])
    const {name,description,price,img} =service;
    return (
        <div>
            <br />
            <h2>this is booking: {serviceId}</h2>
            <h2>this is booking: {price}</h2>
            <h2>this is booking: {description}</h2>
            <h2>this is booking: {name}</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Booking;