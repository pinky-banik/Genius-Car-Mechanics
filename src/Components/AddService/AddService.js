import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./AddService.css"; 
const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services',data)
        .then(res=>{
            if(res.data.insertedId){
                alert("added succesfully");
                reset();
            }
        })
        
    }
    return (
        <div className='w-50 mx-auto bg-success rounded'>
            <div className='my-5 mx-3 add-service'>
            <h1>Add a service</h1>
            <form  onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("description",{required:true})} placeholder="Description" />
            <input type="number"  {...register("price")} placeholder="Price" />
            <input   {...register("img")} placeholder="Image Url" />
            <input type="submit" value="Submit" className="bg-primary rounded" />
            </form>
        </div>
        </div>
    );
};

export default AddService;