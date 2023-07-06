/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {FC} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
// import {Logout, AuthPage, useAuth} from '../modules/auth'
import {App} from '../App'
import { AuthPage, Logout } from '../modules/auth'
import { ChatContextProvider } from '../../Context/ChatContext'

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {PUBLIC_URL} = process.env
const BaseUrl ="CHARGE_SOL"

const AppRoutes: FC = () => {
  // const {currentUser} = useAuth()
  let currentUser=false;
  
  var AuthValue = localStorage.getItem("authValue");

  if(AuthValue==="true"){
    currentUser=true;
  }
  else{
    currentUser=false;
  }
  
  return (
    
<BrowserRouter >
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/dashboard' />} />
            </>
          ) : (
            <> 
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
             </>
          )}
          
        </Route>
      </Routes>
    </BrowserRouter>
    
    
  )
}

export {AppRoutes}
