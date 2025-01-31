'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const GetForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '' });
    const [searchedEmail, setSearchedEmail] = useState('')

    const handleChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Construct URL with query parameters
        const query = new URLSearchParams({ email: formData.email.toLowerCase() });
        const response = await fetch(`/api/users?${query}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to find user");
        }

        setSearchedEmail(formData.email.toLowerCase())

        router.refresh();
        router.push("/");
    }

    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit}>
                <h1>Find Account</h1>
                <h2>Email</h2>
                <input
                    type='text'
                    className='text-black'
                    id='email'
                    name='email'
                    onChange={handleChange}
                    required
                    value={formData.email}
                />
                <input type='submit' className='btn' value="Find Account" />
            </form>

            <p>{searchedEmail}</p>
        </div>
    )
}

export default GetForm