import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const header = { 'Access-Control-Allow-Origin': '*' }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Hit');
        axios.post(`https://66c2b535d057009ee9bdb495.mockapi.io/CRUD-React`, {
            name: name, email: email,
            header,
        })
        navigate('/read')
    }

    return (
        <div className='container'>
            <h1>Create</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name='name' id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}


export default Create;