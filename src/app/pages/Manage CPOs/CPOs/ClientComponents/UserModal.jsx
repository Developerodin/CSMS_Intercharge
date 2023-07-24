import React, { useContext } from "react";
import { KTSVG } from "../../../../../_metronic/helpers";
import { useFormik } from "formik";
import { Checkbox } from "@mui/material";
import { BASE_URL } from "../../../../Config/BaseUrl";
import axios from "axios";
import CposContext from "../../../../../Context/CposContext";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const UserModal = () => {
  const token =sessionStorage.getItem('token');
  const {updated, setUpdated} =useContext(CposContext);
  const module=[
    {name:"Charger Management"},
    {name:"User Management"},
    {name:"Company Management"},
    {name:"Billing and Payment"},
    {name:"Complaints Management"},
    {name:"Coupon Management"}
  ]
  const design = {
    minWidth: "85%",
    background: "rgb(244,245,247)",
    border: "none",
    padding: "10px",
    marginTop: "10px",
  };


  const initialValues={
  name:"",
  email:"",
  password:"",
  Brand_Name:"",
  GST_No:"",
  MID:"",
  Registered_Address:"",
  state:"",
  regional:"",
  National:"",
  Initial_Balance:"",
  Number:"",
  ABB_TestCharger:"",
  Select_Price:"",
  Fixed_Rent:"",
  Company_Share:"",
  image:""
}


  const {values,errors,handleSubmit,handleChange,handelBlur}=useFormik({
    initialValues:initialValues,
    onSubmit:async(values,{resetForm}) => {
      console.log("🚀 ~ file: UserModal.jsx:27 ~ UserModal ~ values:", values);
      try{
        const res =await axios.post(`${BASE_URL}/cpo/signup`, 
        values  
        ,{ headers: { "Authorization": `${token}` } })
        setUpdated((prev)=>prev+1)
        console.log("res cpo add ==>",res)
      }
      catch(err){
        console.log("error: ", err);
      }
      resetForm()
    }
  })
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
       <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' /> Add CPO
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document" style={{ minWidth: "90%" }}>
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
                      value={values.name}
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
                      value={values.Brand_Name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3 d-flex justify-content-start design">
                    <input type="text" style={design} placeholder="GST NO" name="GST_No"
                      value={values.GST_No}
                      onChange={handleChange} />
                  </div>
                  <div className="col-md-3 d-flex justify-content-start design">
                    <input type="number" style={design} placeholder="Initial Balance" name="Initial_Balance"
                      value={values.Initial_Balance}
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
                      value={values.MID}
                      onChange={handleChange}/>
                  </div>
                  <div
                    className="col-md-3 d-flex justify-content-start"
                    placeholder="Select CPO"
                  >
                    <input type="text" style={design} placeholder="Registered Address" name="Registered_Address"
                      value={values.Registered_Address}
                      onChange={handleChange}/>
                  </div>

                  <div
                    className="col-md-3 d-flex justify-content-start"
                   
                  >
                    <input type="text" style={design} placeholder="State" name="state"
                      value={values.state}
                      onChange={handleChange}/>
                  </div>

                  <div className="col-md-3 d-flex justify-content-start design mt-5">
                    <div className="form-check d-flex align-items-center">
                    <input
                        className="form-check-input"
                        type="checkbox"
                       
                        id="flexCheckDefault"
                        name="regional"
                      value={values.regional}
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
                      value={values.National}
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
                      value={values.email}
                      onChange={handleChange}/>
                  </div>
                  <div className="col-md-4 d-flex justify-content-start design">
                    

                     <input type="text" style={design} placeholder="Password" name="password"
                      value={values.password}
                      onChange={handleChange}/>
                  </div>

                  <div className="col-md-4 d-flex justify-content-start">
                    <input type="number" style={design} placeholder="Number" name="Number"
                      value={values.Number}
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
                      value={values.ABB_TestCharger}
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
                    
                      value={values.Select_Price}
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
                     
                      value={values.Fixed_Rent}
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
                     
                      value={values.Company_Share}
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
                      
                      value={values.Company_Share2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" onClick={handleSubmit} data-bs-dismiss="modal" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Add New Role
              </h3>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12">Role Name</div>
                <div className="col-12">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ background: "#f4f5f7", border: "none" }}
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12">Permission and Functionality </div>
                <div className="col-12"style={{border:"1px solid #f9f9f9"}}>
<div className="row mb-3">
  <div className="col-4 mt-2" style={{color:'#d3d2d8'}}>
    Select modules
  </div>
  <div className="col-8 mt-2  d-flex justify-content-center" style={{color:'#d3d2d8'}}>
    Access Details
  </div>
  </div>
  <div className="row pb-3"  style={{background:"#f4f5f7"}}>
  {/* map */}
  {module.map((self,index)=>
  {return(
<>
<div key={index+12} className="col-4 mt-4 txt-center ">
  {self.name}
  </div>
  <div className="col-8 d-flex justify-content-center mt-4">
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
</div>
  </div>
</>
  )})}
 
</div>
  {/* map */}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
