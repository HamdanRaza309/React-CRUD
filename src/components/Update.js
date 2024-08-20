import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function Update(props) {

    const [id, setId] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`https://66c2b535d057009ee9bdb495.mockapi.io/CRUD-React/${id}`, {
            name: name, email: email,
        }).then(() => {
            navigate('/read')
        }).catch((error) => {
            console.error('Error Updating user:', error);
        });
    }
    return (
        <div className='container'>
            <h1>Update</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name='name'
                        value={name}
                        id="name"
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name='email'
                        value={email}
                        id="email"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex m-2">
                    <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                    <Link to='/read' className="btn btn-dark">Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default Update