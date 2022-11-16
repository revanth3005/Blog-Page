import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRote = () => {
    const jwt={'token':false}
  return (
    localStorage.token ? <Outlet/> : <Navigate to='/Login'/>
  )
}

export default PrivateRote
