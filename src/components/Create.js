import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Create() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const header = { 'Access-Control-Allow-Origin': '*' }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`https://66c2b535d057009ee9bdb495.mockapi.io/CRUD-React`, {
            name: name, email: email,
            header,
        }).then(() => {
            navigate('/read')
        }).catch((error) => {
            console.error('Error creating user:', error);
        });
    }

    return (
        <div className='container p-5'>
            <div className="d-flex justify-content-between">
                <h1>Create</h1>
                <Link to='/read' className="btn btn-primary p-2" >Show Data</Link>
            </div>
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