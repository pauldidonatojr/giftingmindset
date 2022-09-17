import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Landing, Error, Register, ProtectedRoute } from './pages'
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
       <SharedLayout />
      </ProtectedRoute>
     }
    >
     <Route index element={<Stats />} />
     <Route path="logout" element={<Logout />} />
    </Route>
    <Route path="landing" element={<Landing />} />
    <Route path="register" element={<Register />} />
    <Route path="*" element={<Error />} />
   </Routes>
   <ToastContainer position="top-center" />
  </BrowserRouter>
 )
}

export default App
