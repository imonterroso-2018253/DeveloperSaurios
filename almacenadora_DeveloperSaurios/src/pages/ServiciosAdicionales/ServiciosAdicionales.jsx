import React, { useState } from "react";
import axios from 'axios'

export const ServiciosAdicionales = () => {
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const AddService = async(e)=>{
        try{
            e.preventDefault()
            const { data } = await axios.post('http://localhost:3200/benefit/create', form)
            if(data.message){
                alert(data.message)
            }
        }catch(err){
            alert(err.response.data.message)
            throw new Error('Error Add Service user')
        }
    }

    return (
        <>
            <div className="container">
                <form className='m-5 text-center '>
                    <div className='mb-3'>
                        <label className='form-label'>name</label>
                        <input onChange={handleChange} name='name' className='form-control' type="text" />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="">description</label>
                        <input onChange={handleChange} name='description' className='form-control' type="text" />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="">price</label>
                        <input onChange={handleChange} name='price' className='form-control' type="text" />
                    </div>
                <button onClick={(e)=> AddService(e)} className='btn btn-primary'>
                    Add Service
                </button>
                </form>
            </div>    
        </>
    )        
}