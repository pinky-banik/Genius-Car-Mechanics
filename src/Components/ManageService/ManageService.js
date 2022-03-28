import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services,setServices] =useState([]);
    useEffect(()=>{
        fetch('https://quiet-retreat-78453.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])

    const handleDelete=id=>{
        const url = `https://quiet-retreat-78453.herokuapp.com/services/${id}`
       fetch(url,{
        method: 'DELETE'
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
           
           if(data.deletedCount>0){
            const remaining =services.filter(service=>service._id!==id);
            setServices(remaining)
               alert("item deleted succesfully");
           }
       })
    }
    return (
        <div>
            <h1>This is manage service</h1>
            <div className='m-5'>
            {
                services.map(service=> <div className='m-2 w-50 mx-auto border rounded' key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={()=>handleDelete(service._id)} className='m-2 border-danger rounded'>Delete Operation</button>
                    </div>)
            }
            </div>
        </div>
    );
};

export default ManageService;