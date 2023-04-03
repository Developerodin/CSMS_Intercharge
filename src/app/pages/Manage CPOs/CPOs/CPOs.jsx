
import React from 'react'
import { KTCard } from '../../../../_metronic/helpers'
import { UsersListHeader } from '../../Internal-Cpo-Managment/AllCpos/UsersListHeader'
import { GenralTabel } from '../../../TabelComponents/GenralTable'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { WalletModel } from './Modal/WalletModal';
import UserModal from "./ClientComponents/UserModal";
const column=[
  {name: "Company Name"},
  {name: "CPO"},
  {name: "Total Users"},
  {name: "Category"},
  {name: "Total Admins"},
  {name: "Chargers"},
  {name: "Credits"},
  {name: "Company wallet"},
  {name: "Add amount"},
  {name: "Update"},
]



const rows=[
  {"Company Name":"Townhall fleet","CPO":"intercharge","Total Users":"1","Category":"Fleet","Total Admins":"3","Chargers":"3"," Credits":"-90","Company wallet":<WalletModel/>,"Add amount":<MonetizationOnIcon/>,"Update":<BorderColorIcon/>},
  {"Company Name":"Test fleet Subscription","CPO":"intercharge","Total Users":"3","Category":"Fleet","Total Admins":"3","Chargers":"3"," Credits":"500","Company wallet":<WalletModel/>,"Add amount":<MonetizationOnIcon/>,"Update":<BorderColorIcon/>},
  {"Company Name":"Townhall fleet","CPO":"intercharge","Total Users":"2","Category":"Fleet","Total Admins":"3","Chargers":"3"," Credits":"8000","Company wallet":<WalletModel/>,"Add amount":<MonetizationOnIcon/>,"Update":<BorderColorIcon/>},
  {"Company Name":"AA","CPO":"intercharge","Total Users":"1","Category":"Fleet","Total Admins":"3","Chargers":"3"," Credits":"0","Company wallet":<WalletModel/>,"Add amount":<MonetizationOnIcon/>,"Update":<BorderColorIcon/>},
  {"Company Name":"Hall 16_A","CPO":"intercharge","Total Users":"5","Category":"Fleet","Total Admins":"3","Chargers":"3"," Credits":"400","Company wallet":<WalletModel/>,"Add amount":<MonetizationOnIcon/>,"Update":<BorderColorIcon/>},
  {"Company Name":"Sprint fleet","CPO":"intercharge","Total Users":"3","Category":"Fleet","Total Admins":"3","Chargers":"3"," Credits":"0","Company wallet":<WalletModel/>,"Add amount":<MonetizationOnIcon/>,"Update":<BorderColorIcon/>},
  {"Company Name":"SiT fleet","CPO":"intercharge","Total Users":"2","Category":"Fleet","Total Admins":"3","Chargers":"3"," Credits":"60000","Company wallet":<WalletModel/>,"Add amount":<MonetizationOnIcon/>,"Update":<BorderColorIcon/>},
  {"Company Name":"Host fleet 16_4A","CPO":"intercharge","Total Users":"0","Category":"Fleet","Total Admins":"3","Chargers":"3"," Credits":"0","Company wallet":<WalletModel/>,"Add amount":<MonetizationOnIcon/>,"Update":<BorderColorIcon/>},
  {"Company Name":"Fleet Y_12","CPO":"intercharge","Total Users":"4","Category":"Fleet","Total Admins":"3","Chargers":"3"," Credits":"1","Company wallet":<WalletModel/>,"Add amount":<MonetizationOnIcon/>,"Update":<BorderColorIcon/>},
  {"Company Name":"SIT TT_1A","CPO":"intercharge","Total Users":"2","Category":"Fleet","Total Admins":"3","Chargers":"3"," Credits":"70000","Company wallet":<WalletModel/>,"Add amount":<MonetizationOnIcon/>,"Update":<BorderColorIcon/>},
  {"Company Name":"Expo Mark_1","CPO":"intercharge","Total Users":"3","Category":"Fleet","Total Admins":"3","Chargers":"3"," Credits":"0","Company wallet":<WalletModel/>,"Add amount":<MonetizationOnIcon/>,"Update":<BorderColorIcon/>},
]









const CPOs = () => {
  return (
    <div>
         <KTCard>
      <UsersListHeader/>
       
      <GenralTabel rows={rows} column={column}/>
      </KTCard>
    </div>
  )

}
export default CPOs;
