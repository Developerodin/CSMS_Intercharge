import React from 'react'
import { useLocation } from 'react-router-dom';
import { CardsWidget20, ChartsWidget3, ListsWidget1, ListsWidget3, ListsWidget4, ListsWidget6, ListsWidget7, ListsWidget8, ListsWidget9 } from '../../../../../_metronic/partials/widgets';
import { KTSVG } from '../../../../../_metronic/helpers';
import { Box, Button, Typography } from '@mui/material';


export const RoamingAgreements = () => {
    const location=useLocation();
    console.log("🚀 ~ file: ChargerDetails.jsx:7 ~ ChargerDetails ~ location:", location.state)
  return (
    <div>
      <div className={`card`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>Roaming Agreement</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Total 40 Chargers</span>
        </h3>

        
      </div>
      <div className='card-body pt-5'>
       
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box textAlign="center" width="100px">
            <Typography>Tata</Typography>
          </Box>

          <Box textAlign="center">
            <Typography>5 Own</Typography>
          </Box>

          <Box textAlign="center">
            <Typography>11 Roaming</Typography>
          </Box>

          <Box textAlign="center">
          <Button variant="contained" >Downlode Aggrement</Button>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="30px">
          <Box textAlign="center" width="100px">
            <Typography>MG</Typography>
          </Box>

          <Box textAlign="center">
            <Typography>9 Own</Typography>
          </Box>

          <Box textAlign="center">
            <Typography>15 Roaming</Typography>
          </Box>

          <Box textAlign="center">
          <Button variant="contained" >Downlode Aggrement</Button>
          </Box>
        </Box>
       
      </div>

    </div>

    <div className={`card`} style={{marginTop:"30px"}}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>Net Revenue</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>₹ 12,500</span>
        </h3>

        
      </div>
      <div className='card-body pt-5'>
       <Box>
       <ChartsWidget3 className='card-xl-stretch mb-xl-8'/>
       </Box>
        
       
      </div>

    </div>
    </div>
  )
}
