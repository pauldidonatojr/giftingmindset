import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Landing, Error, Register, ProtectedRoute } from './pages'
import DashboardV2 from './pages/dashboardV2/Dashboard'
import AddUser from './pages/dashboardV2/manageUser/AddUser'
import AllMembers from './pages/dashboardV2/manageUser/AllMembers'
import ActivateRequest from './pages/dashboardV2/manageUser/ActivatRequest'
import GenealogyTree from './pages/dashboardV2/genealogy/GenealogyTree'
import DirectTeam from './pages/dashboardV2/genealogy/DirectTeam'
import 'react-toastify/dist/ReactToastify.css'
import { MainBackground } from './components/StyledComponents'
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
import HeaderDrawer from './components/HeaderDrawer'

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
    <Route
     path="admin/adduser"
     element={
      <>
       <HeaderDrawer />
       <AddUser />
      </>
     }
    />
    <Route
     path="admin/allmembers"
     element={
      <>
       <HeaderDrawer />
       <AllMembers />
      </>
     }
    />
    <Route
     path="admin/genealogytree"
     element={
      <>
       <HeaderDrawer />
       <GenealogyTree />
      </>
     }
    />
    <Route
     path="admin/activaterequest"
     element={
      <>
       <HeaderDrawer />
       <ActivateRequest />
      </>
     }
    />
    <Route
     path="admin/directteam"
     element={
      <>
       <HeaderDrawer />
       <DirectTeam />
      </>
     }
    />
   </Routes>
   <ToastContainer position="top-center" />
  </BrowserRouter>
 )
}

export default App
