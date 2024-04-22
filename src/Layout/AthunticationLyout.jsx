import React from 'react'
import { Outlet } from 'react-router-dom'
import { isNotAuthenticated} from './Atuth'
import { Navigate } from 'react-router-dom'

export const AthunticationLyout = () => {
    const auth = isNotAuthenticated(); 

    return (
        <>
                {auth ? <Outlet /> : <Navigate to="/dashboard" />}
        </>
    )
}
