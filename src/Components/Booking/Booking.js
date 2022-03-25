import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <br />
            <h2>this is booking: {serviceId}</h2>
            <h2>this is booking: {serviceId}</h2>
            <h2>this is booking: {serviceId}</h2>
            <h2>this is booking: {serviceId}</h2>
            <h2>this is booking: {serviceId}</h2>
            <h2>this is booking: {serviceId}</h2>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;