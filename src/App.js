import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Landing, Error, Register, ProtectedRoute } from './pages'
import DashboardV2 from './pages/dashboardV2/Dashboard'
import AddUser from './pages/dashboardV2/manageUser/AddUser'
import 'react-toastify/dist/ReactToastify.css'
import {
 Stats,
 ManageUsers,
 Genealogy,
 Gifthistory,
 Settings,
 Completeboards,
 Vouchers,
 Support,
 Logout,
 SharedLayout,
} from './pages/dashboard'

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route
     path="/"
     element={
      <ProtectedRoute>
       <DashboardV2 />
      </ProtectedRoute>
     }
    >
     <Route index element={<Stats />} />
     <Route path="logout" element={<Logout />} />
    </Route>
    <Route path="landing" element={<Landing />} />
    <Route path="register" element={<Register />} />
    <Route path="*" element={<Error />} />
    <Route path="admin/dashboardv2" element={<DashboardV2 />} />
    <Route path="admin/adduser" element={<AddUser />} />
   </Routes>
   <ToastContainer position="top-center" />
  </BrowserRouter>
 )
}

export default App
