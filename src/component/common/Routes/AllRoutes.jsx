import React from 'react'
import ProfileSummery from '../../../pages/EMP/ProfileSummery'
import ProfileView from '../../../pages/EMP/ProfileView'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../MainLayout'
import DashBoard from '../DashBoard/DashBoard'
import EmpModuleDashBoard from '../DashBoard/ModuleDashBoard/EmpModuleDashBoard'
import NewProfileView from '../../../pages/EMP/NewProfileView'
import Locator from '../Locator/Locator'

const AllRoutes = () => {
  return (
   <>
     <MainLayout>
      <Routes>
        {/* Main dashboard route */}
        <Route path="/" element={<DashBoard />} />
        <Route path="/wfm" element={<EmpModuleDashBoard />} />
        <Route path="/wfm" element={<EmpModuleDashBoard />} />
        <Route path="/Emp/Locator" element={<Locator />} />
        
        {/* Nested routes under /emp */}
        <Route path="/emp">
          <Route path="profile" element={<ProfileSummery />} />
          <Route path="profileView" element={<NewProfileView />} />
        </Route>
      </Routes>
    </MainLayout>
   </>
  )
}

export default AllRoutes