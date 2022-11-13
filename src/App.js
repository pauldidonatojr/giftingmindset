import { Routes, Route, useNavigate } from 'react-router-dom'
import AddUser from './pages/dashboardV2/manageUser/AddUser'
import AllMembers from './pages/dashboardV2/manageUser/AllMembers'
import ActivateRequest from './pages/dashboardV2/manageUser/ActivateRequest'
import GenealogyTree from './pages/dashboardV2/genealogy/GenealogyTree'
import DirectTeam from './pages/dashboardV2/genealogy/DirectTeam'
import SignUpScreen from './pages/SignUpScreen'
import SignInScreen from './pages/SignInScreen'
import Error from './pages/Error'
import Landing from './pages/Landing'
import ForgotPasswordSubmitScreen from './pages/ForgotPasswordSubmitScreen'
import ForgotPasswordScreen from './pages/ForgotPasswordScreen'
import ConfirmSignUp from './pages/ConfirmSignUp'
import { Auth, API, Storage } from 'aws-amplify'
import awsmobile from './aws-exports'
import { useState, useEffect } from 'react'
import ProtectedRoute from './utils/ProtectedRoute'
import DashboardHome from './pages/dashboardV2/DashboardHome'
import Account from './pages/dashboardV2/user/account/Account'
import GiftReceievedHistory from './pages/dashboardV2/user/gift-received-history/GiftReceievedHistory'
import GiftSentHistory from './pages/dashboardV2/GiftSentHistory'
import OpenTicket from './pages/dashboardV2/user/support/OpenTicket'
import ChangePassword from './pages/dashboardV2/user/ChangePassword'
import Downline from './pages/dashboardV2/genealogy/Downline'
import Wallet from './pages/dashboardV2/admin/wallet/WalletData'
import PendingQueries from './pages/dashboardV2/admin/support/PendingQueries'
import ResolvedQueries from './pages/dashboardV2/admin/support/ResolvedQueries'
Auth.configure(awsmobile)

function App() {
 const [loggedIn, setIsLoggedIn] = useState(false)
 let navigate = useNavigate()

 useEffect(() => {
  const getCurrentUser = async () => {
   let user = await Auth.currentAuthenticatedUser()
   if (user) {
    setIsLoggedIn(true)
    navigate('/dashboard')
   } else {
    setIsLoggedIn(false)
   }
  }
  getCurrentUser()
 }, [loggedIn])
 return (
  <Routes>
   {/* <Route path="/downline" element={<Downline />} /> */}
   {/* <Route path="/GiftSentHistory" element={<GiftSentHistory />} /> */}
   <Route
    path="/signIn"
    element={<SignInScreen setIsLoggedIn={setIsLoggedIn} />}
   />
   <Route path="/signUp" element={<SignUpScreen />} />
   <Route
    path="/confirmSignUp"
    element={<ConfirmSignUp setIsLoggedIn={setIsLoggedIn} />}
   />
   <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
   <Route
    path="/forgotpasswordsubmit"
    element={<ForgotPasswordSubmitScreen />}
   />
   <Route path="*" element={<Error />} />
   <Route path="/landing" element={<Landing />} />
   <Route
    path="/"
    element={<ProtectedRoute setIsLoggedIn={setIsLoggedIn} user={loggedIn} />}
   >
    <Route path="/resolvedqueries" element={<ResolvedQueries />} />
    <Route path="/pendingqueries" element={<PendingQueries />} />
    <Route path="/dashboard" element={<DashboardHome />} />
    <Route path="/directteam" element={<DirectTeam />} />
    <Route path="/downline" element={<Downline />} />
    <Route path="/walletdata" element={<Wallet />} />

    <Route path="/account" element={<Account />} />
    <Route path="/giftreceievedhistory" element={<GiftReceievedHistory />} />
    <Route path="/ChangePassword" element={<ChangePassword />} />
    <Route path="/openticket" element={<OpenTicket />} />
    <Route path="/GiftSentHistory" element={<GiftSentHistory />} />
    <Route path="/genealogytree" element={<GenealogyTree />} />
    <Route path="/activaterequest" element={<ActivateRequest />} />
    <Route path="/adduser" element={<AddUser />} />
    <Route path="/allmembers" element={<AllMembers />} />
   </Route>
  </Routes>
 )
}

export default App
