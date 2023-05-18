import React from 'react'
import { useSelector } from 'react-redux'
import Application from '../../components/layout/application';
import {Routes, Route} from 'react-router-dom'
import Companies from './companies';
import EditCompany from './edit-companies';
import CreateCompany from './create-company';

const ApplicationPage = () => {


  return (
    <Application>

     <Routes>
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/edit/:id" element={<EditCompany />} />          
          <Route path="/create-company" element={<CreateCompany />} />

      </Routes>

    </Application>
  )
}

export default ApplicationPage