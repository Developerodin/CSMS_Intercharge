
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button } from '@mui/material';

import axios from "axios";
import { errorMonitor } from 'events';
import CircularProgress from '@mui/material/CircularProgress';

import LinearProgress from '@mui/material/LinearProgress';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// function createData(
//   name: string,
//   checkbox:undefined,
  
// ) {
//   return { name,checkbox};
// }

// const rows = [
//   createData('Admin',<Checkbox {...label} />),
//   createData('Developer',<Checkbox {...label} />),
//   createData('Analyst',<Checkbox {...label} />),
//   createData('Support',<Checkbox {...label} />),
//   createData('Trial',<Checkbox {...label} />),
// ];

// const initvalues={
//   email:"",
//   name:"",
//   password:""
// }

// const column=[
//    {name:"Sno"},
//    {name:"Sno2"},
//    {name:"Sno3"},
//    {name:"Sno"},
//    {name:"Sno2"},
//    {name:"Sno3"},
// ]

// const rows=[
//    {sno:"1",nmae:"Aksahy",email:"aksahy09@gmail.com",sno2:"1",nmae2:"Aksahy",email2:"aksahy09@gmail.com"},
//    {sno:"2",nmae:"Aksahy",email:"aksahy09@gmail.com"},
//    {sno:"3",nmae:"Aksahy",email:"aksahy09@gmail.com"},
//    {sno:"4",nmae:"Aksahy",email:"aksahy09@gmail.com"},
//    {sno:"5",nmae:"Aksahy",email:"aksahy09@gmail.com"},
//    {sno:"1",nmae:"Aksahy",email:"aksahy09@gmail.com"},
//    {sno:"2",nmae:"Aksahy",email:"aksahy09@gmail.com"},
//    {sno:"3",nmae:"Aksahy",email:"aksahy09@gmail.com"},
//    {sno:"4",nmae:"Aksahy",email:"aksahy09@gmail.com"},
//    {sno:"5",nmae:"Aksahy",email:"aksahy09@gmail.com"},
// ]



export const GenralTabel = (props) => {
const {rows,column}=props;

  return (
    <div>
    
   

       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>
            {column.map((el,index)=>{
               return(
                  
                    <TableCell key={index+123} align="center" sx={{fontWeight:"600"}}>{el.name.toUpperCase()}</TableCell>
                    
               )
               })}
               </TableRow>
            
          
        </TableHead>
        <TableBody>
        {rows.map((el,index)=>{
         let data={};
         let data2=[];
         for(let i=0;i<Object.keys(el).length;i++)
         {
            data = Object.keys(el)[i];
            data2[i]=el[data]
            // console.log("value",el[data])
            // console.log(data2);

         }
         
         
               return(
                  <>
                  <TableRow key={index+1234}>
                     {data2.map((els,index)=>{
                        return <TableCell key={index+13} align="center">{els}</TableCell>;
                     })}
                  </TableRow>
                  
                  </>
                    
                    
               )
               })}
         
        </TableBody>
      </Table>
    </TableContainer>

    {/* <hr/>
    { valid ?   Data.map((el)=>{
      return(
        <div key={el.id}>
              <h3>{el.title}</h3>
        </div>
      )
    })
    :
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
    
    } */}
      </div>
  )
}





