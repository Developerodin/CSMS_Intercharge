
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, Switch, TextField } from '@mui/material';
import { KTCard } from '../../../../../_metronic/helpers';
import { GenralTabel } from '../../../../TabelComponents/GenralTable';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import RefreshIcon from '@mui/icons-material/Refresh';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import EvStationIcon from '@mui/icons-material/EvStation';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { BASE_URLPE } from '../../../../Config/BaseUrlPe';
import axios from 'axios';
const column=[
    {name:"Name"},
    {name:"Type"},
    {name:"Pricing"},
    {name:"Date of Onboarding "}
]

const rows=[
    {name:"Intercharge",Type:"CPO",Pricing:"1x/unit",Date:"23/02/2023"},
    {name:"Intercharge",Type:"CPO",Pricing:"1x/unit",Date:"23/02/2023"},
    
]


const ChargerDetails = () => {
    const location=useLocation();
    console.log("🚀 ~ file: ChargerDetails.jsx:7 ~ ChargerDetails ~ location:", location.state)
    const cpId = 'CP1231';
  const userId ='+919694998693';
  const connector_id = '1';
  const companyId = '651536095ad1d151264fc5b6'; 
  const transactionId = 13910;
    const [age, setAge] = React.useState('');
    const [connection, setconnection] = React.useState(false);
    const [value, setValue] = React.useState(dayjs('2022-04-17'));

    const [PluEasyToken,setPluEasyToken] = React.useState("")
    const [loading,setLoading] = React.useState(false)
    const [StartChargingresponse, setStartChargingresponse] = React.useState(null);
    const [sliderValue, setSliderValue] = React.useState(0);
    const [modeOfCharging, setModeOfCharging] = React.useState("time")
    const [stopChargingResponse, setstopChargingResponse] = React.useState(null);

    const InitalChargingValue ={
      type: "", 
      method: "",
      number:""
    }
    const [ChargingValue, setChargingValue] = React.useState(InitalChargingValue);

    const handleChargingValuesChange = (key, value) => {
      setChargingValue({ ...ChargingValue, [key]: value });
    };
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const navigate = useNavigate();

    const handelBack=()=>{
      console.log("back")
      navigate("/manage-cpos/chargers/");
    }

    const StartCharging =async()=>{
      setLoading(true)
      const header ={
        Authorization:PluEasyToken,
        CompanyId : companyId
      }
      try {
        const response = await axios.post(
          `${BASE_URLPE}remote-start-transaction`,
          {
            cpId: cpId,
            userId:userId,
            idTag: '',
            connector_id: connector_id,
            mode:ChargingValue.method,
            value: sliderValue,
          },
          {
            headers : header
          }
        );
        setStartChargingresponse(response.data);
        setLoading(false)
        return response.data;
      } catch (error) {
        console.error('Error:', error);
        setLoading(false)
      }
    }

const handelChargeStart=()=>{
    StartCharging().then((res)=>{
      console.log("res",res)

      if(res.payload.status === "Accepted"){
        //  navigation.navigate("Charging")
      }
      else{
            console.log(res.payload.status)
            // navigation.navigate("Charging")
      }
      
    })

    
  }

  const stopCharging = async () => {
    const header ={
      Authorization:PluEasyToken,
      CompanyId : companyId
    }
    try {
      const response = await axios.post(
        `${BASE_URLPE}remote-stop-transaction`,
        {
          cpId: cpId, // Replace with the actual charge point ID
          transactionId:transactionId, // Replace with the actual transaction ID
        },
        {
          headers : header
        }
      );
    
      setstopChargingResponse(response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handelStopCharging=()=>{
    stopCharging().then((res)=>{
      console.log("res ===>",res)

      if(res.payload.status === "Accepted"){
        // navigation.navigate("Charging Complete")
      }
      else{
            console.log(res.payload.status)
            // navigation.navigate("Charging Complete")
      }
    })
    
  }

  const ResetDevice = async () => {
    const header ={
      Authorization:PluEasyToken,
      CompanyId : companyId
    }
    try {
      const response = await axios.post(
        `${BASE_URLPE}reset`,
        {
          cpId: cpId,
          type:"", 
        },
        {
          headers : header
        }
      );
    
      setstopChargingResponse(response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <KTCard >
      <Box padding="10px" marginLeft="10px">
      <IconButton color="primary" aria-label="upload picture" component="label" onClick={handelBack} sx={{"&:hover": { backgroundColor: "none"}}}>
      <ArrowBackIosIcon fontSize='large' sx={{color:"crimson"}}/>
      <ArrowBackIosIcon fontSize='large' sx={{color:"crimson"}}/>
      <ArrowBackIosIcon fontSize='large' sx={{color:"crimson"}}/>
      </IconButton>
        </Box>
    <Box margin="30px">
        <Box display="flex" justifyContent="space-between" sx={{display:{xs:"block",sm:"block",md:"flex",lg:"flex",xl:"flex"}}}>
            <Box sx={{width:{xs:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"}}}>
            <Card sx={{ minWidth: 275 }}>
      <CardContent >
        
        <Box sx={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
        <Typography variant='h5' fontWeight="bold">Test <Switch  /></Typography>

        <Typography variant='h6' style={{color:"crimson"}}>Disconnected</Typography>
        
        </Box>
          

         <Box sx={{display:"flex", justifyContent:"space-between",marginTop:"20px"}}>
            <Box >
            <Typography sx={{marginTop:"10px"}} variant='subtitle1'>Station Name: Amass Test Station Dc</Typography>
            <Typography  sx={{marginTop:"10px"}} variant='subtitle1'>Ownership: intercharge </Typography>
            </Box>
            <Box>
            <Typography sx={{marginTop:"10px"}} variant='subtitle1'>Location: 28.4441N,77.0174E</Typography>
            <Typography sx={{marginTop:"10px"}} variant='subtitle1'>Access Type: public</Typography>
            </Box>
         </Box>
        
         <Box sx={{marginTop:"30px"}}>
         <Typography variant='h5'>Connectors</Typography>
         <Box sx={{display:"flex", justifyContent:"space-between",alignItems:"center",marginTop:"20px"}}>

         <Box  display="flex">
            <Box sx={{width:"40px"}}>  <Box sx={{width:"30px",margin:"13px auto"}}> <EvStationIcon fontSize='large' sx={{color:"crimson"}}/></Box> </Box>
            <Box>
            <Typography sx={{marginTop:"10px"}} variant='subtitle2'>Power Rating:60</Typography>
            <Typography sx={{marginTop:"10px"}} variant='subtitle2'>Units Consumed:0.95 </Typography>
            </Box>
            
         </Box>
         
         <Box sx={{marginTop:"10px"}}>
            <Typography sx={{marginTop:"5px"}} variant='subtitle1'>Total Power Rating: 60</Typography>
            <Typography sx={{marginTop:"5px"}} variant='subtitle1'>Total Units Consumed: 0.95</Typography>
        </Box>

        </Box>

         </Box>


      </CardContent>
    
    </Card>
            </Box>

{/* ====================================================== */}

            <Box  sx={{width:{xs:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"},marginTop:{xs:"100px",sm:"100px",md:"0px",lg:"0px",xl:"0px"}}}>
            <Card sx={{ minWidth: 275,padding:"0px" ,minHeight:"100%" }}>
      <CardContent padding="0px">
        <Typography variant='h5' fontWeight="bold">Stakeholder Information</Typography>
        <GenralTabel rows={rows} column={column}/>
          
      </CardContent>
     
    </Card>
            </Box>
        </Box>
     
{/* =================================================================================================== */}
<Box  paddingTop="20px" marginTop="50px" marginBottom="20px">

<Box display="flex"  justifyContent="space-between" sx={{alignItems:"center",width:{xs:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"},marginLeft:{xs:"none",sm:"none",md:"auto",lg:"auto",xl:"auto"}}}>

  <Box >

  <LocalizationProvider dateAdapter={AdapterDayjs} >
    
      <DatePicker label="From" />
   
    </LocalizationProvider>
    </Box>

    <Box >

<LocalizationProvider dateAdapter={AdapterDayjs} >
  
    
    <DatePicker label="To"/>
  </LocalizationProvider>
  </Box>

    <Box >
      <FormControl sx={{ minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Daily</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Unlock Connector"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box >
      <FormControl sx={{ minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Unit</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Unlock Connector"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </Box>
 

    </Box>
</Box>

{/* =================================================================================================== */}
<Box display="flex" justifyContent="space-between" sx={{display:{xs:"block",sm:"block",md:"flex",lg:"flex",xl:"flex"}}}>
            <Box  sx={{width:{xs:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"}}}>
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant='h5' fontWeight="bold">OCPP Commands</Typography>


          <Box marginTop="30px" display="flex" justifyContent="space-between">
            <Box >
            <Box>
            <Typography variant='subtitle2'>Clear Cach <ClearAllIcon sx={{color:"crimson"}}/></Typography>
            </Box>
            <Box sx={{marginTop:"20px"}}>
            
            <Typography variant='subtitle2'>Get Configration <SystemUpdateAltIcon sx={{color:"crimson"}}/></Typography>
            </Box>
            
            </Box>


            <Box >
              <Box>
              <Typography variant='subtitle2' onClick={ResetDevice}>Reset Charger <RefreshIcon sx={{color:"crimson"}}/></Typography>
              </Box>
          
            <Box sx={{marginTop:"20px",display:"flex", alignItems:"center"}}>
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Unlock Connector</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Unlock Connector"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>

      <LockOpenIcon sx={{color:"crimson"}}/>
    </Box>

            </Box>
          </Box>




<Box display="flex" justifyContent="space-between" marginTop="30px">
<TextField id="outlined-basic" label="Set Configuration" variant="outlined" />
<TextField id="outlined-basic" label="Enter Value" variant="outlined" />
<TextField id="outlined-basic" label="Enter URL" variant="outlined" />
</Box>

<Box marginTop="30px" display="flex" justifyContent="space-between">
  <Button variant="contained" sx={{backgroundColor:"crimson","&:hover": { backgroundColor: "#E21818"}}}>Configure</Button>
  <Button variant="contained" sx={{backgroundColor:"crimson","&:hover": { backgroundColor: "#E21818"}}}>Upgrade</Button>
</Box>

      </CardContent>
      
    </Card>
            </Box>

{/* ====================================================== */}

            <Box  sx={{width:{xs:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"},marginTop:{xs:"100px",sm:"100px",md:"0px",lg:"0px",xl:"0px"}}}>
            <Card sx={{ minWidth: 275,padding:"0px" ,minHeight:"100%" }}>
      <CardContent>
      <Typography variant='h5' fontWeight="bold">Utilisation Summary</Typography>

      <TextareaAutosize
      aria-label="minimum height"
      minRows={10}
      placeholder="Summary....."
      style={{ width:"100%",marginTop:"20px"}}
    />
          
      </CardContent>
     
    </Card>
            </Box>

        </Box>
     
{/* =================================================================================================== */}






    </Box>

     <Box style={{ padding: "20px" }}>
      <Typography variant="h5" fontWeight="bold">
        Start Charging
      </Typography>
      <Box style={{ marginTop: "30px" }}>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Select Type</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={ChargingValue.type}
            onChange={(e) => handleChargingValuesChange('type', e.target.value)}
            autoWidth
            label="Select Type"
          >
            <MenuItem value={"money"}>Amount</MenuItem>
            <MenuItem value={"time"}>Time</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box style={{ marginTop: "30px", display: "flex", alignItems: "center" }}>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Method</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={ChargingValue.method}
            onChange={(e) => handleChargingValuesChange('method', e.target.value)}
            autoWidth
            label="Select Method"
          >
            <MenuItem value={"phone_number"}>Phone Number</MenuItem>
            <MenuItem value={"rfid"}>RFID</MenuItem>
          </Select>
        </FormControl>
       
        <TextField id="outlined-basic" label="Enter The Phone Number or RFID" value={ChargingValue.number} 
        onChange={(e) => handleChargingValuesChange('number', e.target.value)} variant="outlined" style={{ width: "60%", marginLeft: "30px"} } />

        <Button variant="contained" size="large" style={{ marginLeft: "20px" }} onClick={handelChargeStart}>
          Start
        </Button>
        <Button variant="contained" size="large" color="error" style={{ marginLeft: "20px" }} onClick={handelStopCharging}>
          Stop
        </Button>
      </Box>
    </Box>
    </KTCard>
  )
}

export default ChargerDetails





