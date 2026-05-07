import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorBoundary = () => {
    const error=useRouteError();
    console.log(error.message);
  return (
    <div>ErrorBoundary</div>
  )
}

export default ErrorBoundary