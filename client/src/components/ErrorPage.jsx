import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div id='notfound'>
            <div className='notfound'>
                <div className='notfound-404'>
                    <h1>404</h1>
                </div>
                <h2>We are sorry! page not found!</h2>
                <p className='mb-5'>
                    The page you are looking for might has been removed, had its name change
                    or is temporarily non-available
                </p>
                <NavLink to='/'> back to home page</NavLink>
            </div>
        </div>
    )
}

export default ErrorPage;