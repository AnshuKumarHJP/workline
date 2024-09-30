// import React, { useEffect } from 'react'
// import ProfileSummery from '../../../pages/EMP/ProfileSummery'
// import ProfileView from '../../../pages/EMP/ProfileView'
// import { Route, Routes } from 'react-router-dom'
// import MainLayout from '../MainLayout'
// import EmpModuleDashBoard from '../DashBoard/ModuleDashBoard/EmpModuleDashBoard'
// import NewProfileView from '../../../pages/EMP/NewProfileView'
// import Locator from '../Locator/Locator'
// import SessionExpire from './SessionExpire'
// import UnknownPage from './UnknownPage'


// const AllRoutes = () => {


//   return (
//    <>
//      <MainLayout>
//       <Routes>
//         {/* Main dashboard route */}
//         <Route path="*" element={<UnknownPage />} />
//         <Route path="/" element={<DashBoard />} />
//         <Route path="wfm" element={<EmpModuleDashBoard />} />
//         <Route path="Emp/Locator" element={<Locator />} />
        
//         {/* Nested routes under /emp */}
//         <Route path="/emp">
//           <Route path="profile" element={<ProfileSummery />} />
//           <Route path="profileView" element={<NewProfileView />} />
//         </Route>
//       </Routes>
//     </MainLayout>
//    </>
//   )
// }

// export default AllRoutes