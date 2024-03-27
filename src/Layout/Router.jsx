import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { Support } from './Support'
import { Transection } from './Transection'
import { DashboardLyout } from './DashboardLyout'
import { AthunticationLyout } from './AthunticationLyout'
import { Loginpages } from '../pages/loginpage'
import { Customer } from './Customer'
import { Signpage } from '../pages/Signpage'
import { AddCustomer } from './AddCustomer'

export const Router = () => {
  return (
    <div>

      <Routes>
        <Route  element={<DashboardLyout />}>
          <Route path='/dashboard' element ={<Dashboard/>}/>
          <Route path="/customer" element={<Customer />} />
          <Route path="/addcustomer" element={<AddCustomer/>} />

          <Route path="/support-tickets" element={<Support />} />
          <Route path="/transactions" element={<Transection />} />
        </Route>
        <Route path='/' element={<AthunticationLyout />}>
          <Route path="/" element={<Loginpages />} />
          <Route path="/Signup" element={<Signpage/>}/>
        </Route>
      </Routes>

    </div>
  )
}
