import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Read() {

    const [data, setData] = useState([]);
    const [requestCount, setRequestCount] = useState(0); // Track the number of requests

    function getData() {
        if (requestCount < 2) { // Limit to two requests
            axios.get(`https://66c2b535d057009ee9bdb495.mockapi.io/CRUD-React`)
                .then((res) => {
                    setData(res.data);
                    setRequestCount(prevCount => prevCount + 1); // Increment the request count
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }

    const handleDelete = (id) => {
        axios.delete(`https://66c2b535d057009ee9bdb495.mockapi.io/CRUD-React/${id}`)
            .then(() => {
                setRequestCount(0); // Reset request count after deletion
                getData(); // Refresh data after deletion
            })
            .catch((error) => {
                console.error('Error deleting data:', error);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='container'>
            <h1>Read</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button className="btn btn-success">Edit</button></td>
                            <td><button className="btn btn-danger" onClick={() => { handleDelete(user.id) }}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Read;