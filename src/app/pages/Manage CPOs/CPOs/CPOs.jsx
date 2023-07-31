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
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CposContext from "../../../../Context/CposContext";
const column = [
  { name: "CPOs" },
  { name: "State" },
  // {name: "Category"},
  // {name: "Total Admins"},
  // {name: "Total Chargers"},
  { name: "Available Credits" },
  { name: "Company Wallet" },
  { name: "Add Amount" },
  { name: "Update" },
  { name: "Delete" },
];

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
  const [rows, setRows] = useState([]);
  const [selectedCpo, setselectedCpo] = useState({});
  const [formValues, setFormValues] = useState(initialValues);
  
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
          "Brand Name": item.Brand_Name,
          State: item.state,
          // "Category": item.category,
          // "Total Admins": item.totalAdmins,
          // "Chargers": item.chargers,
          Credits: item.Initial_Balance,
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

      {/* <div style={{ marginTop: "40px" }}>
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
            </div> */}
    </div>
  );
};
export default CPOs;
