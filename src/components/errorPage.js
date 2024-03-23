import React from 'react';
import { errorURL } from './urlConstants';
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError();
    const {status, statusText} = error;
  return (
    <div className="Error">
        <h1>OOPS!!!</h1>
        <img className='img' src= {errorURL} alt="error" />
        <h2> {status + ": "+ statusText} </h2> 
    </div>
  )
}
