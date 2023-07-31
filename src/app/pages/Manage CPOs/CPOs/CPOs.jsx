import React, { useContext, useEffect, useState } from "react";
import { KTCard } from "../../../../_metronic/helpers";
import { UsersListHeader } from "../../Internal-Cpo-Managment/AllCpos/UsersListHeader";
import { GenralTabel } from "../../../TabelComponents/GenralTable";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from '@mui/icons-material/Delete';
import { WalletModel } from "./Modal/WalletModal";
import UserModal from "./ClientComponents/UserModal";
import UserModal2 from "./ClientComponents/UserModal2";

import { BASE_URL } from "../../../Config/BaseUrl";
import axios from "axios";
import { useFormik } from "formik";
import CposContext from "../../../../Context/CposContext";
import { Button,SwipeableDrawer,Box,Modal,Typography,TextField,Dialog,Slide  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TransitionProps } from '@mui/material/transitions';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/system';

const column = [
  { name: "CPOs" },
  { name: "State" },
  {name: "Number of Chargers"},
  {name: "Roaming Agreements"},
  // {name: "Total Chargers"},
  { name: "Available Credits" },
  { name: "Company Wallet" },
  { name: "Add Amount" },
  { name: "Update" },
  { name: "Delete" },
];
const MyBox = styled('Button')({
  width:'100%',
  color: '#fff',
  backgroundColor: '#009ef7',
  padding: 8,
  borderRadius: 4,
  border:"none",
  fontWeight: 'bold',
  margin:"10px"
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CPOs = () => {
  const token = sessionStorage.getItem("token");
  const initialValues = {
    name: "",
    email: "",
    password: "",
    Brand_Name: "",
    GST_No: "",
    MID: "",
    Registered_Address: "",
    state: "",
    regional: "",
    National: "",
    Initial_Balance: "",
    Number: "",
    ABB_TestCharger: "",
    Select_Price: "",
    Fixed_Rent: "",
    Company_Share: "",
    image: "",
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [Cpostate, setCpoState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [rows, setRows] = useState([]);
  const [selectedCpo, setselectedCpo] = useState({});
  const [formValues, setFormValues] = useState(initialValues);
  const [Dilogopen, setDilogOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = useState(0);
  const handleOpen = (Data) => {
    setFormValues(Data);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFormValues(initialValues);
  };

  const handleDilogOpen = (Data) => {
    // setFormValues(Data);
    setDilogOpen(true);
  };
  const handleDilogClose = () => {
    setDilogOpen(false);
    // setFormValues(initialValues);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const navigate = useNavigate();

  const fetchUserData = async () => {
    // try {
    //   const response = await axios.get(`${BASE_URL}/cpo/users/${id}`
    //   ,{ headers: { "Authorization": `${token}` } }
    //   );
    //   return response.data;
    // } catch (error) {
    //   console.error('Error fetching user data:', error);
    //   return null;
    // }
  };

  const module = [
    { name: "Charger Management" },
    { name: "User Management" },
    { name: "Company Management" },
    { name: "Billing and Payment" },
    { name: "Complaints Management" },
    { name: "Coupon Management" },
  ];
  const design = {
    minWidth: "85%",
    background: "rgb(244,245,247)",
    border: "none",
    padding: "10px",
    marginTop: "10px",
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleEditSubmit = async () => {
    console.log(" Edit Submit", formValues);
    try {
      // Send a PATCH request with the updated data from the state
      await axios.put(`${BASE_URL}/cpo/users/${formValues._id}`, formValues, {
        headers: { Authorization: `${token}` },
      });
      setUpdate((prev)=>prev+1);
      handleClose();
      console.log("User data updated successfully!");
      // You can perform any success actions here, like showing a success message
    } catch (error) {
      console.error("Error updating user data:", error);
      // Handle the error and display an error message if needed
    }
  };

  const handelDeleteCpo=async(id)=>{
   
    try {
      // Send a PATCH request with the updated data from the state
      await axios.delete(`${BASE_URL}/cpo/users/${id}`, {
        headers: { Authorization: `${token}` },
      });
      setUpdate((prev)=>prev+1);
    
      console.log("User delete updated successfully!");
      // You can perform any success actions here, like showing a success message
    } catch (error) {
      console.error("Error updating user data:", error);
      // Handle the error and display an error message if needed
    }
  }

  const handelRoamingClick=(e) => {
    console.log("🚀 ~ file: Chargers.jsx:22 ~ handelClick ~ e:", e.target)
     navigate("/roaming_agreements/", {state:{_id:"akshay"}});
    //  <Navigate to="/chargerdetails" state={{todos:[]}} replace={true}/>
  
  }

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const toggleDrawerCpo = (anchor, open) => (event) => {
    setCpoState({ ...state, [anchor]: open });
  };

  const handelWalletClose = (id,data)=>{
    setState({ ...state, 'right': false });
    // setUserWalletValues(initialValuesWallet)

  }

  const handelCpoClose = (id,data)=>{
    setCpoState({ ...state, 'right': false });
    

  }


  const handelCpoClick=(id,data)=>{
    // fetchUserWalletData(id);
    // handelWalletHistory(id)
    console.log('handelCpoClick',data)
    setselectedCpo(data)
    setCpoState({ ...state, 'right': true });
    
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 , padding:"10px"}}
      role="presentation"
      
    >


      hii


    </Box>
  );

  const listCpoDetails = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 , padding:"10px"}}
      role="presentation"
      
    >


        <Box sx={{padding:"5px"}}>
        <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"#f4f5f7",padding:"10px",borderRadius:"10px"}}>
            <Typography sx={{color:"crimson"}} variant="h6" component="h6">CPO Details</Typography>
         
            </Box>
          <Box sx={{margin:"20px"}}>
            
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">User Name</Typography>
          <Typography sx={{color:"#00af06"}}variant="subtitle1" component="h2">{selectedCpo.name}</Typography>
          
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">User Number</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.Number}</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Initial Balance</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.Initial_Balance}</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">User Email</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.email}</Typography>
            </Box>

            
          </Box>
        </Box>
     <hr/>
      
      
        <Box sx={{padding:"5px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"#f4f5f7",padding:"10px",borderRadius:"10px"}}>
            <Typography sx={{color:"crimson"}} variant="h6" component="h6">Company Details</Typography>
         
            </Box>

            <Box sx={{margin:"20px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Brand Name</Typography>
            <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.Brand_Name}</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Registered_Address</Typography>
            <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.Registered_Address}</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">State</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.state}</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">GST No</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.GST_No}</Typography>
            </Box>
           
            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">MID</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.MID}</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Company Share</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.Company_Share}</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Fixed Rent</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.Fixed_Rent}</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Select Price</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.Select_Price}</Typography>
            </Box>
          </Box>

           
        </Box>

        

        


    </Box>
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/cpo/users`, {
          headers: { Authorization: `${token}` },
        });
        // Assuming the response data is an array of objects with the required properties
        console.log("response", response);
        const data = response.data;
        const formattedData = data.map((item) => ({
          "Brand Name":<Button onClick={()=>handelCpoClick(item._id,item)}>{item.Brand_Name}</Button>,
          State: item.state,
          "NumberOfChargers":<Button onClick={()=>handleDilogOpen()}>40</Button>,
          "Roaming Agreements": <Button onClick={handelRoamingClick}>Roaming</Button>,
          // "Chargers": item.chargers,
          "Credits": item.Initial_Balance,
          "Company Wallet": <WalletModel />,
          "Add amount": <MonetizationOnIcon />,
          Update: <BorderColorIcon onClick={() => handleOpen(item)} />,
          Delete: <DeleteIcon  onClick={() => handelDeleteCpo(item._id)}/>
        }));

        setRows(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [update]);

  return (
    <div>
      <KTCard>
        <UsersListHeader  state={setUpdate}/>

        <GenralTabel rows={rows} column={column} />
      </KTCard>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLongTitle">
                ADD CPO
              </h3>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3 d-flex justify-content-start">
                    Register Name
                  </div>
                  <div className="col-md-3 d-flex justify-content-start">
                    Brand Name
                  </div>
                  <div className="col-md-3 d-flex justify-content-start">
                    GST No.
                  </div>
                  <div className="col-md-3 d-flex justify-content-start">
                  Initial Balance
                  </div>

                  <div className="col-md-3 d-flex justify-content-start">
                    <input
                      type="text"
                      style={design}
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                    placeholder="Register Name"
                    />
                  </div>
                  <div className="col-md-3 d-flex justify-content-start">
                    <input
                      type="text"
                      style={design}
                      placeholder="Brand Name"
                      name="Brand_Name"
                      value={formValues.Brand_Name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3 d-flex justify-content-start design">
                    <input type="text" style={design} placeholder="GST NO" name="GST_No"
                      value={formValues.GST_No}
                      onChange={handleChange} />
                  </div>
                  <div className="col-md-3 d-flex justify-content-start design">
                    <input type="number" style={design} placeholder="Initial Balance" name="Initial_Balance"
                      value={formValues.Initial_Balance}
                      onChange={handleChange}/>
                  </div>
                </div>
                <div className="row mt-5 ">
                  <div className="col-md-3 d-flex justify-content-start">
                    MID
                  </div>
                  <div className="col-md-3 d-flex justify-content-start">
                    Registered Address
                  </div>
                  <div className="col-md-3 d-flex justify-content-start">
                    State
                  </div>
                  <div className="col-md-3 d-flex justify-content-start ">
                    Choose Category
                  </div>

                  <div className="col-md-3 d-flex justify-content-start">
                    <input type="text" style={design} placeholder="MID" name="MID"
                      value={formValues.MID}
                      onChange={handleChange}/>
                  </div>
                  <div
                    className="col-md-3 d-flex justify-content-start"
                    placeholder="Select CPO"
                  >
                    <input type="text" style={design} placeholder="Registered Address" name="Registered_Address"
                      value={formValues.Registered_Address}
                      onChange={handleChange}/>
                  </div>

                  <div
                    className="col-md-3 d-flex justify-content-start"
                   
                  >
                    <input type="text" style={design} placeholder="State" name="state"
                      value={formValues.state}
                      onChange={handleChange}/>
                  </div>

                  <div className="col-md-3 d-flex justify-content-start design mt-5">
                    <div className="form-check d-flex align-items-center">
                    <input
                        className="form-check-input"
                        type="checkbox"
                       
                        id="flexCheckDefault"
                        name="regional"
                      value={formValues.regional}
                      onChange={handleChange}
                      />
                      
                       {/* <Checkbox {...label}  /> */}
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                        style={{ fontSize: "15px", marginRight: "5px" }}
                      >
                        Regional
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center">
                    <input
                        className="form-check-input"
                        type="checkbox"
                       
                        id="flexCheckDefault"
                        name="National"
                      value={formValues.National}
                      onChange={handleChange}
                      />
                      
                       {/* <Checkbox {...label}  /> */}
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                        style={{ fontSize: "15px", marginRight: "5px" }}
                      >
                        National
                      </label>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 mt-5">
                    <h3> Add Credentials</h3>
                  </div>
                  
                  <div className="col-md-4 d-flex justify-content-start">
                  Email
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                   Password
                  </div>

                  <div className="col-md-4 d-flex justify-content-start">
                    Number
                  </div>
                  
                  

                  
                  <div className="col-md-4 d-flex justify-content-start">
                  <input type="Email" style={design} placeholder="Email" name="email"
                      value={formValues.email}
                      onChange={handleChange}/>
                  </div>
                  <div className="col-md-4 d-flex justify-content-start design">
                    

                     <input type="text" style={design} placeholder="Password" name="password"
                      value={formValues.password}
                      onChange={handleChange}/>
                  </div>

                  <div className="col-md-4 d-flex justify-content-start">
                    <input type="number" style={design} placeholder="Number" name="Number"
                      value={formValues.Number}
                      onChange={handleChange}/>
                  </div>
                 
                  
                  
                </div>
              </div>
              <div className="container-fluid mt-20">
                <h3 className="mb-5">Charger Mapping</h3>
                <div
                  className="row pt-5 pb-5 "
                  style={{ border: "1px solid #f3f3f3" }}
                >
                  <div className="col-6">
                    <input
                      className="p-3"
                      type="text"
                      style={{ minWidth: "80%", border: "1px solid #f4f5f7" }}
                      placeholder="Search"
                      name="Search"
                     
                    />
                  </div>

                  <div className="col-2 d-flex align-items-center">
                    Select Price
                  </div>
                  <div className="col-2 d-flex align-items-center">
                    Fixed Rent
                  </div>
                  <div className="col-2 d-flex align-items-center">
                    Company Share
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                       
                        id="flexCheckDefault"
                        name="ABB_TestCharger"
                      value={formValues.ABB_TestCharger}
                      onChange={handleChange}
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        ABB_TestCharger
                      </label>
                    </div>
                  </div>
                  <div className="col-2">
                    <input
                      type="text"
                      name="Select_Price"
                      id=""
                      style={{
                        maxWidth: "50%",
                        background: "#f4f5f7",
                        border: "none",
                      }}
                    
                      value={formValues.Select_Price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="text"
                      name="Fixed_Rent"
                      id=""
                      style={{
                        maxWidth: "50%",
                        background: "#f4f5f7",
                        border: "none",
                      }}
                     
                      value={formValues.Fixed_Rent}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="text"
                      name="Company_Share"
                      id=""
                      style={{
                        maxWidth: "40%",
                        border: "none",
                        marginRight: "5px",
                        background: "#f4f5f7",
                      }}
                     
                      value={formValues.Company_Share}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="Company_Share2"
                      id=""
                      style={{
                        maxWidth: "40%",
                        border: "none",
                        background: "#f4f5f7",
                      }}
                      
                      value={formValues.Company_Share2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

             <div style={{ marginTop: "40px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "50%",
                  margin: "auto",
                }}
              >
                <button
                  type="button"
                  onClick={handleEditSubmit}
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>

      
            <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={handelWalletClose}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>


          <SwipeableDrawer
            anchor={'right'}
            open={Cpostate['right']}
            onClose={handelCpoClose}
            onOpen={toggleDrawerCpo('right', true)}
          >
            {listCpoDetails('right')}
          </SwipeableDrawer>

          <Dialog
        open={Dilogopen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDilogClose}
        aria-describedby="alert-dialog-slide-description"
      >
       <DialogTitle>{"Total Chargers : 40"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box display="flex" justifyContent="space-between" alignItems="center" width="500px" >
              
            <MyBox>AC (15)
            </MyBox>

            <MyBox>DC (25)
            </MyBox>
            </Box>
          
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default CPOs;
