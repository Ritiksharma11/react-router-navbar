import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    return (
        <div>
            <h1>An Error Occured</h1>
            <h2>{error.message}</h2> <br />

            <button onClick={() => navigate('/')}></button>
        </div>
    )
}

export default Error