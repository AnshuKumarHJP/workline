import React from 'react'
import ProfileSummery from '../../../pages/EMP/ProfileSummery'
import ProfileView from '../../../pages/EMP/ProfileView'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../MainLayout'
import EmpDashBoard from '../DashBoard/EmpDashBoard/EmpDashBoard'
import EmpModuleDashBoard from '../DashBoard/ModuleDashBoard/EmpModuleDashBoard'

const   EmpRoute = () => {
  return (
   <>
     <MainLayout>
      <Routes>
        {/* Main dashboard route */}
        <Route path="/" element={<EmpDashBoard />} />
        <Route path="/wfm" element={<EmpModuleDashBoard />} />
        
        {/* Nested routes under /emp */}
        <Route path="/emp">
          <Route path="profile" element={<ProfileSummery />} />
        </Route>
      </Routes>
    </MainLayout>
   </>
  )
}

export default EmpRoute