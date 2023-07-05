/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'

import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
        
    {/* dashboard */}
    <SidebarMenuItem
      to='/dashboard'
      icon='/media/icons/duotune/general/gen025.svg'
      title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
      fontIcon='bi-app-indicator'
    />

{/* Manage CPOs */}
{/* <div className='menu-item'>
        <div className='menu-item'>
           
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Manage CPOs</span>
        </div>
      </div> */}
{/* Internal CPO management */}

{/* <SidebarMenuItem
          to='/evowners/overview/'
          
          title='Overview'
          fontIcon='bi-layers'
          hasBullet={true}
        />

<SidebarMenuItem
          to='/evowners/overview/'
          
          title='Overview'
          fontIcon='bi-layers'
          hasBullet={true}
        />

<SidebarMenuItem
          to='/evowners/overview/'
          
          title='Overview'
          fontIcon='bi-layers'
          hasBullet={true}
        /> */}





{/* <SidebarMenuItemWithSub to='evowners/overview/' title='Overview' hasBullet={false} icon='duotune/abstract/abs042.svg'>
        
        <SidebarMenuItem
          to='/internalcpo/allcpos/'
          
          title='All CPOs '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='internalcpo/chargers/'
          
          title='Chargers'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='internalcpo/invoices/'
          
          title='Invoices'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='internalcpo/payout/'
          
          title='Payout maangment'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub> */}

{/* <SidebarMenuItemWithSub to='/crafted/pages/profile' title='CPO' hasBullet={false} icon='/media/icons/duotune/general/gen019.svg'>
        
        <SidebarMenuItem
          to='/internalcpo/allcpos/'
          
          title='All CPOs '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='internalcpo/chargers/'
          
          title='Chargers'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='internalcpo/invoices/'
          
          title='Invoices'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='internalcpo/payout/'
          
          title='Payout maangment'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>


{/* External CPO management */}
      
      {/* <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Chargers' hasBullet={false} icon='/media/icons/duotune/general/gen022.svg'>
        
        <SidebarMenuItem
          to='externalcpo/allcpos/'
          
          title='All CPOs '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='externalcpo/chargers/'
          
          title='Chargers'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='externalcpo/invoices/'
         
          title='Invoices'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='externalcpo/payout/'
          
          title='Payout maangment'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub> */}


{/* End Users */}
{/* 
      <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Charging Stations' hasBullet={false} icon='/media/icons/duotune/communication/com006.svg'>
        
        <SidebarMenuItem
          to='endusers/customerlist/'
          
          title='Customer list '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='endusers/discountcoupons/'
          
          title='Discount coupons'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='endusers/chargingsessions/'
          
          title='Charging sessions'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='endusers/communications/'
          
          title='Communications'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub> */}

{/* Settings */}

{/* <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Station Logs' hasBullet={false} icon='/media/icons/duotune/communication/com006.svg'>
        
        <SidebarMenuItem
          to='endusers/customerlist/'
          
          title='Customer list '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='endusers/discountcoupons/'
          
          title='Discount coupons'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='endusers/chargingsessions/'
          
          title='Charging sessions'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='endusers/communications/'
          
          title='Communications'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub> */}


      {/* <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Charger Map' hasBullet={false} icon='/media/icons/duotune/communication/com006.svg'>
        
        <SidebarMenuItem
          to='endusers/customerlist/'
          
          title='Customer list '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='endusers/discountcoupons/'
          
          title='Discount coupons'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='endusers/chargingsessions/'
          
          title='Charging sessions'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='endusers/communications/'
          
          title='Communications'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub> */}



      {/* <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Settings' hasBullet={false} icon='/media/icons/duotune/general/gen025.svg'>
        
        <SidebarMenuItem
          to='settings/management/users'
          
          title='User management'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='settings/roles'
          
          title='Roles'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='settings/myprofile/'
          
          title='My profile'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='settings/errorlogs/'
          
          title='Error logs'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='settings/system_masters/'
          
          title='System masters'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='settings/default_settings/'
          
          title='Default settings'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>  */}




{/* Manage CPOs */}











<div className='menu-item'>
        <div className='menu-content'>
          <span className='menu-heading fw-bold  fs-7'>Manage CPOs</span>
        </div>
             </div>





             <SidebarMenuItem
          to='/manage-cpos/overview/'
          icon='/media/icons/duotune/graphs/gra010.svg'
          title='Overview'
          fontIcon='bi-layers'
          
        />

         <SidebarMenuItem
          to='/manage-cpos/cpos/'
          icon='/media/icons/duotune/general/gen022.svg'
          title='CPOs'
          fontIcon='bi-layers'
         
        />



         <SidebarMenuItem
          to='/manage-cpos/chargers/'
          icon='/media/icons/duotune/general/gen019.svg'
          title='Chargers'
          fontIcon='bi-layers'
         
        /> 

<SidebarMenuItem
          to='/manage-cpos/charging-stations/'
          icon='/media/icons/duotune/files/fil003.svg'
          title='Charging Stations'
          fontIcon='bi-layers'
         
        /> 
         <SidebarMenuItem
          to='/manage-cpos/station-logs/'
          icon='/media/icons/duotune/abstract/abs048.svg'
          title='Station Logs'
          fontIcon='bi-layers'
         
        /> 
         <SidebarMenuItem
          to='/manage-cpos/charger-map/'
          icon='/media/icons/duotune/maps/map002.svg'
          title='Charger Map'
          fontIcon='bi-layers'
         
        /> 
       

{/* Manage EV Owners */}
              <div className='menu-item'>
        <div className='menu-content'>
          <span className='menu-heading fw-bold  fs-7'>Manage EV Owners</span>
        </div>
             </div>

             <SidebarMenuItem
          to='/evowners/overview/'
          icon='/media/icons/duotune/abstract/abs042.svg'
          title='Overview'
          fontIcon='bi-layers'
          
        />

<SidebarMenuItem
          to='/evowners/userlist/'
          icon='/media/icons/duotune/communication/com013.svg'
          title='UserList'
          fontIcon='bi-layers'
         
        />



<SidebarMenuItem
          to='evowners/complains/'
          icon='/media/icons/duotune/abstract/abs026.svg'
          title='Complains'
          fontIcon='bi-layers'
         
        />




{/* Chats  */}

<div className='menu-item'>
        <div className='menu-content'>
          <span className='menu-heading fw-bold  fs-7'>Chats</span>
        </div>
      </div>

      <SidebarMenuItem
    to='/chats/private-chat/'
    icon='/media/icons/duotune/general/gen002.svg'
    title='Private Chat'
    fontIcon='bi-layers'
  />

{/* <SidebarMenuItem
    to='/chats/group-chat/'
    icon='/media/icons/duotune/abstract/abs027.svg'
    title='Group Chart'
    fontIcon='bi-layers'
  /> */}


      {/* <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Overview' hasBullet={false} icon='/media/icons/duotune/communication/com012.svg'>
        
        <SidebarMenuItem
          to='reports/summery-report/'
         
          title='Summery report '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/revenue-report-dashboard/'
          
          title='Revenue report dashboard'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='reports/charger-usage-report/*'
          
          title='Charger usage report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/cpo-activity-report/'
          
          title='CPO activity report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/user-stats/'
          
          title='User stats'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/coupon-usages/'
          
          title='Coupon usages'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/crafted/pages/profile' title='UserList' hasBullet={false} icon='/media/icons/duotune/communication/com012.svg'>
        
        <SidebarMenuItem
          to='reports/summery-report/'
         
          title='Summery report '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/revenue-report-dashboard/'
          
          title='Revenue report dashboard'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='reports/charger-usage-report/*'
          
          title='Charger usage report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/cpo-activity-report/'
          
          title='CPO activity report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/user-stats/'
          
          title='User stats'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/coupon-usages/'
          
          title='Coupon usages'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Complains' hasBullet={false} icon='/media/icons/duotune/communication/com012.svg'>
        
        <SidebarMenuItem
          to='reports/summery-report/'
         
          title='Summery report '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/revenue-report-dashboard/'
          
          title='Revenue report dashboard'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='reports/charger-usage-report/*'
          
          title='Charger usage report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/cpo-activity-report/'
          
          title='CPO activity report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/user-stats/'
          
          title='User stats'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/coupon-usages/'
          
          title='Coupon usages'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub> */}


{/* Manage EV Owners */}






{/* Billing & Payments */}

      <div className='menu-item'>
        <div className='menu-content'>
          <span className='menu-heading fw-bold  fs-7'>Billing & Payments</span>
        </div>
      </div>

      <SidebarMenuItem
    to='/billing/overview/'
    icon='/media/icons/duotune/abstract/abs014.svg'
    title='Overview'
    fontIcon='bi-layers'
  />

<SidebarMenuItem
    to='/billing/alltransaction/'
    icon='/media/icons/duotune/layouts/lay008.svg'
    title='All Transactions'
    fontIcon='bi-layers'
  />



<SidebarMenuItem
    to='/billing/companypayouts/'
    icon='/media/icons/duotune/text/txt002.svg'
    title='Company Payouts'
    fontIcon='bi-layers'
  />


<SidebarMenuItem
    to='/billing/discountCoupons/'
    icon='/media/icons/duotune/abstract/abs014.svg'
    title='Discount Coupons'
    fontIcon='bi-layers'
  />

      {/* <SidebarMenuItemWithSub to='/crafted/pages/profile' title='All Transactions' hasBullet={false} icon='/media/icons/duotune/communication/com012.svg'>
        
        <SidebarMenuItem
          to='reports/summery-report/'
         
          title='Summery report '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/revenue-report-dashboard/'
          
          title='Revenue report dashboard'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='reports/charger-usage-report/*'
          
          title='Charger usage report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/cpo-activity-report/'
          
          title='CPO activity report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/user-stats/'
          
          title='User stats'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/coupon-usages/'
          
          title='Coupon usages'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Company Payouts' hasBullet={false} icon='/media/icons/duotune/communication/com012.svg'>
        
        <SidebarMenuItem
          to='reports/summery-report/'
         
          title='Summery report '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/revenue-report-dashboard/'
          
          title='Revenue report dashboard'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='reports/charger-usage-report/*'
          
          title='Charger usage report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/cpo-activity-report/'
          
          title='CPO activity report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/user-stats/'
          
          title='User stats'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/coupon-usages/'
          
          title='Coupon usages'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Discount Coupons' hasBullet={false} icon='/media/icons/duotune/communication/com012.svg'>
        
        <SidebarMenuItem
          to='reports/summery-report/'
         
          title='Summery report '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/revenue-report-dashboard/'
          
          title='Revenue report dashboard'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='reports/charger-usage-report/*'
          
          title='Charger usage report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/cpo-activity-report/'
          
          title='CPO activity report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/user-stats/'
          
          title='User stats'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/coupon-usages/'
          
          title='Coupon usages'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub> */}

{/* Billing & Payments */}

      {/* <SidebarMenuItem
    to='/customers/'
    icon='/media/icons/duotune/communication/com006.svg'
    title='Customers'
    fontIcon='bi-layers'
  />


    <SidebarMenuItem
      to='/cpos/'
      icon='/media/icons/duotune/general/gen019.svg'
      title='CPOs'
      fontIcon='bi-layers'
    />


<SidebarMenuItem
      to='/payments/'
      icon='/media/icons/duotune/general/gen022.svg'
      title='Payments'
      fontIcon='bi-layers'
    />  */}
{/* Billing & Payments */}

<div className='menu-item'>
        <div className='menu-content'>
          <span className='menu-heading fw-bold  fs-7'>Settings</span>
        </div>
      </div>

      <SidebarMenuItem
    to='/settings/adminmanagment/'
    icon='/media/icons/duotune/general/gen002.svg'
    title='Admin Managment'
    fontIcon='bi-layers'
  />

<SidebarMenuItem
    to='/settings/accessmanagment/'
    icon='/media/icons/duotune/abstract/abs027.svg'
    title='Access Management'
    fontIcon='bi-layers'
  />


<SidebarMenuItem
    to='/settings/system-masters/'
    icon='/media/icons/duotune/coding/cod003.svg'
    title='System Masters'
    fontIcon='bi-layers'
  />













      {/* <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Admin Managment' hasBullet={false} icon='/media/icons/duotune/communication/com012.svg'>
        
        <SidebarMenuItem
          to='reports/summery-report/'
         
          title='Summery report '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/revenue-report-dashboard/'
          
          title='Revenue report dashboard'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='reports/charger-usage-report/*'
          
          title='Charger usage report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/cpo-activity-report/'
          
          title='CPO activity report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/user-stats/'
          
          title='User stats'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/coupon-usages/'
          
          title='Coupon usages'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Access Management' hasBullet={false} icon='/media/icons/duotune/communication/com012.svg'>
        
        <SidebarMenuItem
          to='reports/summery-report/'
         
          title='Summery report '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/revenue-report-dashboard/'
          
          title='Revenue report dashboard'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='reports/charger-usage-report/*'
          
          title='Charger usage report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/cpo-activity-report/'
          
          title='CPO activity report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/user-stats/'
          
          title='User stats'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/coupon-usages/'
          
          title='Coupon usages'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Stytem Masters' hasBullet={false} icon='/media/icons/duotune/communication/com012.svg'>
        
        <SidebarMenuItem
          to='reports/summery-report/'
         
          title='Summery report '
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/revenue-report-dashboard/'
          
          title='Revenue report dashboard'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        
        <SidebarMenuItem
          to='reports/charger-usage-report/*'
          
          title='Charger usage report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/cpo-activity-report/'
          
          title='CPO activity report'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/user-stats/'
          
          title='User stats'
          fontIcon='bi-layers'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='reports/coupon-usages/'
          
          title='Coupon usages'
          fontIcon='bi-layers'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub> */}

{/* Billing & Payments */}

  </>
  )
}

export {SidebarMenuMain}
