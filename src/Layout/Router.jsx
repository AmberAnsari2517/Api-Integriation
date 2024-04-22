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
import { Forgetpassword } from '../pages/Forgetpassword'
import { ChangeEventHandler } from 'react'
import { Changepassword } from './Changepassword'
import { Edit } from '../pages/Edit'
export const Router = () => {
  return (
    <div>

      <Routes>
        <Route path='/'  element={<DashboardLyout />}>
          <Route path='/dashboard' element ={<Dashboard/>}/>
          <Route path="/customer" element={<Customer />} />
          <Route path="/addcustomer" element={<AddCustomer/>} />
          <Route path='/changepassword' element={<Changepassword/>}/>
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route  element={<AthunticationLyout />}>
        <Route path="/login" element={<Loginpages />} />
          <Route path="/Signup" element={<Signpage/>}/>
        <Route path='/forget' element={<Forgetpassword/>}/>
        </Route>
      </Routes>

    </div>
  )
}
