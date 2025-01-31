'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'



const UserForm = () => {

    const router = useRouter();

    const startingUserData ={
        email: '',
        password: '',
    }

    const [formData, setFormData] = useState(startingUserData);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify(formData),
            "content-type": "application/json",
        })

        if(!response.ok){
            throw new Error("Failed to create user")
        }

        router.refresh();
        router.push("/")
    }

  return (
    <div className='flex justify-center'>
        <form method='post' onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <h2>Email</h2>
            <input type='text' className='text-black' id='email' name='email' onChange={handleChange} required={true} value={formData.email}/>
            <h2>Password</h2>
            <input type='password' className='text-black' id='password' name='password' onChange={handleChange} required={true} value={formData.password}/>

            <input type='submit' className='btn' value="Create Account" />
        </form>
    </div>
  )
}

export default UserForm