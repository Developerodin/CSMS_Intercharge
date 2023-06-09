import {Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {AuthLayout} from './AuthLayout'
import { DashboardWrapper } from '../../pages/dashboard/DashboardWrapper'
import { ResetPassword } from './components/ResetPassword'

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      {/* <Route path='registration' element={<Registration />} /> */}
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='reset_Password/:token' element={<ResetPassword />} />
      <Route index element={<Login />} />
    </Route>
    {/* <Route path="/" element={<DashboardWrapper/>}/> */}
  </Routes>
)

export {AuthPage}
