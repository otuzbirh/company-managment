import React from 'react'
import Application from '../../components/layout/application';
import {Routes, Route} from 'react-router-dom'
import Companies from './companies';
import EditCompany from './edit-companies';
import CreateCompany from './create-company';
import ShowText from './text';
import DragCompanies from './drag-companies';

const ApplicationPage = () => {


  return (
    <Application>

     <Routes>
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/edit/:id" element={<EditCompany />} />          
          <Route path="/create-company" element={<CreateCompany />} />
          <Route path="/text-example" element={<ShowText />} />
          <Route path="/drag-companies" element={<DragCompanies />} />

      </Routes>

    </Application>
  )
}

export default ApplicationPage