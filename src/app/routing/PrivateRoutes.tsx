import { FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'

import Cpos from '../pages/cpos/cpos'
import Customers from '../pages/Customers/customers'
import Payments from '../pages/payments/payments'
import UsersPage from '../modules/apps/user-management/UsersPage'
import Roles from '../pages/Roles/Roles'
import AllCpos from '../pages/Internal-Cpo-Managment/AllCpos/AllCpos'

import Invoices from '../pages/Internal-Cpo-Managment/Invoice/Invoices'
import PayoutManagment from '../pages/Internal-Cpo-Managment/PayoutManagement/PayoutManagment'
import CustomerList from '../pages/end-Users/CustomerList/CustomerList'
import DiscountCoupons from '../pages/end-Users/DiscountCoupon/DiscountCoupons'
import ChargingSessions from '../pages/end-Users/ChargingSession/ChargingSessions'
import Communications from '../pages/end-Users/Communication/Communications'
import MyProfile from '../pages/settings/MyProfile'
import ErrorLogs from '../pages/settings/ErrorLogs'
import SystemMasters from '../pages/settings/SystemMasters'
import DefaultSettings from '../pages/settings/DefaultSettings'
import SummeryReport from '../pages/Reports/SummeryReport'
import RevenueReportDashboard from '../pages/Reports/RevenueReportDashboard'
import ChargerUsageReport from '../pages/Reports/ChargerUsageReport'
import CposActivityReport from '../pages/Reports/CposActivityReport'
import UserStats from '../pages/Reports/UserStats'
import CouponUsages from '../pages/Reports/CouponUsages'
import AllCpos_E from '../pages/External-Cpo-Management/AllExternalCpo/AllCpos'
import Chargers_E from '../pages/External-Cpo-Management/ExternalChargers/Chargers'
import Invoices_E from '../pages/External-Cpo-Management/ExternalInvoice/Invoices'
import PayoutManagment_E from '../pages/External-Cpo-Management/ExternalPayout/PayoutManagment'
import Overview from '../pages/Billing & Payments/Overview/Overview'
import Complains from '../pages/Manage Ev Owners/Complains/Complains'
import UserList from '../pages/Manage Ev Owners/User List/UserList'
import AllTransactions from '../pages/Billing & Payments/All Transactions/AllTransactions'
import CompanyPayouts from '../pages/Billing & Payments/Company Payouts/CompanyPayouts'
import AddDiscountModel from '../pages/end-Users/DiscountCoupon/Components/AddDicountModel'
import AdminManagement from '../pages/SETTINGSs/Admin Managment/AdminManagement'
import AccessManagement from '../pages/SETTINGSs/Access Management/AccessManagement'
import CPOs from '../pages/Manage CPOs/CPOs/CPOs'
import ChargingStations from '../pages/Manage CPOs/Charging Stations/ChargingStations'
import StationLogs from '../pages/Manage CPOs/Station Logs/StationLogs'
import ChargerMap from '../pages/Manage CPOs/Charger Map/ChargerMap'
import Chargers from '../pages/Manage CPOs/Chargers/Chargers'
import ChargerDetails from '../pages/Manage CPOs/Chargers/Pages/ChargerDetails'
import UserPayments from '../pages/Billing & Payments/All Transactions/Pages/UserPayments'
import CompanyPayments from '../pages/Billing & Payments/All Transactions/Pages/CompanyPayments'
import ChatPage from '../modules/apps/chat/ChatPage'
import { Private } from '../modules/apps/chat/components/Private'
import { Group } from '../modules/apps/chat/components/Group'







const PrivateRoutes = () => {

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
      
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
       
        
        <Route
          path='cpos/*'
          element={
            <SuspensedView>
              <Cpos/>
            </SuspensedView>
          }
        />
        <Route
          path='customers/*'
          element={
            <SuspensedView>
              <Customers />
            </SuspensedView>
          }
        />
        <Route
          path='payments/*'
          element={
            <SuspensedView>
              <Payments />
            </SuspensedView>
          }
        />

{/* Internal Cpos */}

        <Route
          path='internalcpo/allcpos/*'
          element={
            <SuspensedView>
              <AllCpos/>
            </SuspensedView>
          }
        />
        <Route
          path='internalcpo/chargers/*'
          element={
            <SuspensedView>
              <Chargers/>
            </SuspensedView>
          }
        />
        <Route
          path='internalcpo/invoices/*'
          element={
            <SuspensedView>
              <Invoices/>
            </SuspensedView>
          }
        />
        <Route
          path='internalcpo/payout/*'
          element={
            <SuspensedView>
              <PayoutManagment/>
            </SuspensedView>
          }
        />
        <Route
          path='internalcpo/allcpos/*'
          element={
            <SuspensedView>
              <Payments />
            </SuspensedView>
          }
        />


{/* Internal Cpos End */}


{/* External Cpos */}

<Route
          path='externalcpo/allcpos/*'
          element={
            <SuspensedView>
              <AllCpos_E/>
            </SuspensedView>
          }
        />
        <Route
          path='externalcpo/chargers/*'
          element={
            <SuspensedView>
              <Chargers_E/>
            </SuspensedView>
          }
        />
        <Route
          path='externalcpo/invoices/*'
          element={
            <SuspensedView>
              <Invoices_E/>
            </SuspensedView>
          }
        />
        <Route
          path='externalcpo/payout/*'
          element={
            <SuspensedView>
              <PayoutManagment_E/>
            </SuspensedView>
          }
        />
       


{/* Internal Cpos End */}


        {/* End users */}

        <Route
          path='endusers/customerlist/*'
          element={
            <SuspensedView>
              <CustomerList/>
            </SuspensedView>
          }
        />
        <Route
          path='endusers/discountcoupons/*'
          element={
            <SuspensedView>
              <DiscountCoupons/>
            </SuspensedView>
          }
        />
        <Route
          path='endusers/chargingsessions/*'
          element={
            <SuspensedView>
              <ChargingSessions/>
            </SuspensedView>
          }
        />
        <Route
          path='endusers/communications/*'
          element={
            <SuspensedView>
              <Communications/>
            </SuspensedView>
          }
        />
      

      {/* End users End */}



{/* Sttings */}

            <Route
          path='settings/management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />

         <Route
          path='settings/roles/*'
          element={
            <SuspensedView>
              <Roles/>
            </SuspensedView>
          }
        />



         <Route
          path='settings/myprofile/*'
          element={
            <SuspensedView>
             <MyProfile/>
            </SuspensedView>
          }
        />

        <Route
          path='settings/errorlogs/*'
          element={
            <SuspensedView>
            <ErrorLogs/>
            </SuspensedView>
          }
        />
         
         <Route
          path='settings/system_masters/*'
          element={
            <SuspensedView>
              <SystemMasters/>
            </SuspensedView>
          }
        />

        <Route
          path='settings/default_settings/*'
          element={
            <SuspensedView>
              <DefaultSettings/>
            </SuspensedView>
          }
        />
        

{/* Settings End */}



<Route
          path='manage-cpos/overview/*'
          element={
            <SuspensedView>
              <Overview/>
            </SuspensedView>
          }
        />

         <Route
          path='manage-cpos/cpos/*'
          element={
            <SuspensedView>
              <CPOs/>
            </SuspensedView>
          }
        />



         <Route
          path='manage-cpos/chargers/*'
          element={
            <SuspensedView>
             <Chargers/>
            </SuspensedView>
          }
        />

        <Route
          path='manage-cpos/charging-stations/*'
          element={
            <SuspensedView>
            <ChargingStations/>
            </SuspensedView>
          }
        />
         
         <Route
          path='manage-cpos/station-logs/*'
          element={
            <SuspensedView>
              <StationLogs/>
            </SuspensedView>
          }
        />

        <Route
          path='manage-cpos/charger-map/*'
          element={
            <SuspensedView>
              <ChargerMap/>
            </SuspensedView>
          }
        />





<Route path='chargerdetails/*'
          element={
            <SuspensedView>
              <ChargerDetails/>
            </SuspensedView>
          }
        />



















{/* Reports start */}

{/* <Route
          path='reports/summery-report/*'
          element={
            <SuspensedView>
              <SummeryReport/>
            </SuspensedView>
          }
        />

         <Route
          path='reports/revenue-report-dashboard/*'
          element={
            <SuspensedView>
             <RevenueReportDashboard/>
            </SuspensedView>
          }
        />



         <Route
          path='reports/charger-usage-report/*'
          element={
            <SuspensedView>
             <ChargerUsageReport/>
            </SuspensedView>
          }
        />

        <Route
          path='reports/cpo-activity-report/*'
          element={
            <SuspensedView>
            <CposActivityReport/>
            </SuspensedView>
          }
        />
         
         <Route
          path='reports/user-stats/*'
          element={
            <SuspensedView>
            <UserStats/>
            </SuspensedView>
          }
        />

        <Route
          path='reports/coupon-usages/*'
          element={
            <SuspensedView>
              <CouponUsages/>
            </SuspensedView>
          }
        /> */}







<Route
          path='evowners/overview/*'
          element={
            <SuspensedView>
              <Overview/>
            </SuspensedView>
          }
        />






<Route
          path='evowners/userlist/*'
          element={
            <SuspensedView>
              <UserList/>
            </SuspensedView>
          }
        />





<Route
          path='evowners/complains/*'
          element={
            <SuspensedView>
              <Complains/>
            </SuspensedView>
          }
        />












<Route
          path='billing/overview/*'
          element={
            <SuspensedView>
              <Overview/>
            </SuspensedView>
          }
        />






      <Route
          path='billing/userpayments/*'
          element={
            <SuspensedView>
              <UserPayments/>
            </SuspensedView>
          }
        />
<Route
          path='billing/companypayments/*'
          element={
            <SuspensedView>
              <CompanyPayments/>
            </SuspensedView>
          }
        />
        <Route
          path='billing/alltransaction/*'
          element={
            <SuspensedView>
              <AllTransactions/>
            </SuspensedView>
          }
        />

<Route
          path='billing/companypayouts/*'
          element={
            <SuspensedView>
              <CompanyPayouts/>
            </SuspensedView>
          }
        />



<Route
          path='billing/discountCoupons/*'
          element={
            <SuspensedView>
              <AddDiscountModel/>
            </SuspensedView>
          }
        />



<Route
          path='settings/adminmanagment/*'
          element={
            <SuspensedView>
              <AdminManagement/>
            </SuspensedView>
          }
        />

<Route
          path='chats/private-chat/*'
          element={
            <SuspensedView>
              <Private/>
            </SuspensedView>
          }
        />

<Route
          path='chats/group-chat/*'
          element={
            <SuspensedView>
              <Group/>
            </SuspensedView>
          }
        />


<Route
          path='settings/accessmanagment/*'
          element={
            <SuspensedView>
              <AccessManagement/>
            </SuspensedView>
          }
        />


<Route
          path='settings/system-masters/*'
          element={
            <SuspensedView>
              <SystemMasters/>
            </SuspensedView>
          }
        />





















 {/* Reports End */}

        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
