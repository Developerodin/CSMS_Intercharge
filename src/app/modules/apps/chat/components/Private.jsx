/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Dropdown1, ChatInner} from '../../../../../_metronic/partials'
import { socket } from '../../../../../socket';
import { Box, Modal, Typography,TextField,Button  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const Private = () => {
  const style = {
    textalign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const userData=JSON.parse(localStorage.getItem('User'))
  const userEmail=userData.email;
  const created_by=userData._id;
  const username=userData.name;
  const userId = userData._id;
  const [AddContactopen, setAddContactopen] = React.useState(false);
  const [addContactData, setAddContactData] = React.useState({
    username: '',
    email: ''
  });
  const [ContactData, setContactData] = React.useState([]);
  const [ClickedContact, setClickedContact] = React.useState({});
  useEffect(() => {
    // no-op if the socket is already connected
    console.log('Connect socket')
    socket.connect();
    socket.emit("new-user-joined", userId, username);
    console.log('Soceket id',socket.id);
    // ContectList();
    socket.emit("userData", { userId });
    socket.on('contactsError', ({ msg }) => {
      console.log('Contacts error',msg);
      // toastr.error(msg, 'Error');
    });

    socket.on('Success', ({ msg }) => {
      console.log('Success',msg);
      // toastr.success(msg, 'Success');
      // value = document.getElementById("hide_modal")
      // value.click();
    });

    socket.on('contactsLists', ({ contacts }) => {
      console.log('Contact===>', contacts);
      setContactData(contacts);
      setClickedContact(contacts[0])
    });
   

    socket.on("contact_delete", function ({ receiverId, userId }) {
      console.log("delete", receiverId, userId);
      // document.getElementById(userId) ? document.getElementById(userId).remove() : '';
      // var we = document.getElementById("contact_" + userId).children[0].children[0].children[0].innerHTML[0];
      // document.getElementById("contact_" + userId).remove();
      // if (document.getElementById("s_chat_" + userId) != null) {
      //   document.querySelector(".user-profile-sidebar").style.display = "none";
      //   messageBox.innerHTML = "";
    
      //   document.getElementById("contact_" + receiverId) ? document.getElementById("contact_" + receiverId).remove() : '';
      //   document.getElementById(receiverId) ? document.getElementById(receiverId).remove() : '';
      //   const cntctlength = document.getElementById("contact-sort-" + we).getElementsByTagName('li').length;
      //   if (cntctlength <= 0) {
      //     document.getElementById('contact-of-' + we).remove();
      //   }
      //   document.getElementsByClassName("chat-conversation")[0].style.display = "none";
      //   document.getElementsByClassName("chat-input-section")[0].style.display = "none";
      //   document.getElementById("userProfileBar").style.display = "none";
      //   document.getElementsByClassName("chat-welcome-section")[0].style.display = "flex";
      // }
    });
 

    socket.on('contactInfo', ({ contacts }) => {
      console.log("Contact info ===> " + contacts)
      CharacterData(ClickedContact.user_id,ClickedContact.name)
      // contacts.forEach(contact => {
      //   receiver_Id = contact.user_id;
      //   const time = new Date(contact.createdAt);
      //   const created_at =
      //     time.getDate() +
      //     "-" +
      //     (time.getMonth() + 1) +
      //     "-" +
      //     time.getFullYear() +
      //     "&ensp;" +
      //     time.getHours() +
      //     ":" +
      //     time.getMinutes();
    
     
      
     
      //   userhtml = CharacterData(contact.user_id, contact.name);
      
      // });
    });

   

    return () => {
      console.log('disconnect socket')
      socket.disconnect();

    };
  }, []);

  function singleChat(id) {
  
      socket.emit('contactByUser', { id, userId });
      socket.emit('chat_online', { id });
     
  }

  function CharacterData(id, name) {
    let startm = 0
    socket.emit("userClick", { id, userId, startm });
  
    socket.on("userMessage", ({ users, msgno }) => {
      console.log("userMessage",users, msgno)
      let msgtno = msgno
      // messageBox.innerHTML = "";
      // $('.messages__history').html('')
      // adduchat(users, receiverName)
      startm = 10
    });
  
  }
 
  const handelClickedContact=(el)=>{
    console.log("handelClickedContact==>",el)
    setClickedContact(el);
    singleChat(el._id);
  }

  const HandelAddContect=()=>{
    // console.log("Add new Contect",addContactData);
    // setAddContactopen(false);
    const name=addContactData.username;
    const email=addContactData.email;
   
    console.log("Data",name, email, userEmail, created_by, username)
    socket.emit('contactList', { name, email, userEmail, created_by, username });

  
  }
  
  const handelContectChange=(e)=>{
    const { name, value } = e.target;
    setAddContactData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function deleteContact(contact_id, receiverId) {
    // socket.emit("contact_delete", { contact_id, receiverId, userId });
    // var form_class = document.getElementById("chat_add").getAttribute("class");
    // if (form_class == "message_form") {
    //   socket.emit("all_Message_delete", { receiverId });
    // } else {
    //   socket.emit("all_Group_Message_delete", { receiverId });
    // }
  
    // var we = document.getElementById("contact_" + receiverId).children[0].children[0].children[0].innerHTML[0];
    // document.getElementById("contact_" + receiverId).remove();
    // document.getElementById(receiverId).remove();
    // document.getElementById("s_chat_" + receiverId) ? document.getElementById("s_chat_" + receiverId).innerHTML = "" : '';
  
    // const cntctlength = document.getElementById("contact-sort-" + we).getElementsByTagName('li').length;
    // if (cntctlength <= 0) {
    //   document.getElementById('contact-of-' + we).remove();
    // }
  
    // var form_class = document.getElementById("chat_add").getAttribute("class");
    // document.querySelector(".chat-conversation").style.display = "none";
    // document.getElementsByClassName("chat-input-section")[0].style.display = "none";
    // document.getElementById("userProfileBar").style.display = "none";
    // document.getElementsByClassName("chat-welcome-section")[0].style.display = "flex";
  
  }

  return (
    <div className='d-flex flex-column flex-lg-row'>
      
      <div className='flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0'>
        <div className='card card-flush'>
          <div className='card-header pt-7' id='kt_chat_contacts_header' style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <form className=' position-relative' autoComplete='off'>
              <KTSVG
                path='/media/icons/duotune/general/gen021.svg'
                className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
              />

              <input
                type='text'
                className='form-control form-control-solid px-15'
                name='search'
                placeholder='Search by username or email...'
              />
            </form>
            <Box >
       <AddIcon fontSize='large' onClick={()=>setAddContactopen(true)}/>
      </Box>
          </div>

          <div className='card-body pt-5' id='kt_chat_contacts_body'>
            <div
              className='scroll-y me-n5 pe-5 h-200px h-lg-auto'
              data-kt-scroll='true'
              data-kt-scroll-activate='{default: false, lg: true}'
              data-kt-scroll-max-height='auto'
              data-kt-scroll-dependencies='#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header'
              data-kt-scroll-wrappers='#kt_content, #kt_chat_contacts_body'
              data-kt-scroll-offset='0px'
            >
            
            {ContactData.length > 0 &&
              ContactData.map((el,index)=>{
                    return (
                      <div key={index} onClick={()=>{handelClickedContact(el)}}>
                  <div className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px symbol-circle'>
                    <img alt='Pic' src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />
                  </div>

                  <div className='ms-5'>
                    <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                      {el.name}
                    </a>
                    <div className='fw-bold text-gray-400'>{el.email}</div>
                  </div>
                </div>

                <div className='d-flex flex-column align-items-end ms-2'>
                  <span className='text-muted fs-7 mb-1'>20 hrs</span>
                </div>
              </div>

                 <div className='separator separator-dashed d-none'></div>
                      </div>
                    )
              })
            }

              

             

              
            </div>
          </div>
        </div>
      </div>

      <div className='flex-lg-row-fluid ms-lg-7 ms-xl-10'>
        <div className='card' id='kt_chat_messenger'>
          <div className='card-header' id='kt_chat_messenger_header'>
            <div className='card-title'>
              <div className='symbol-group symbol-hover'></div>
              <div className='d-flex justify-content-center flex-column me-3'>
                <a
                  href='#'
                  className='fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1'
                >
                  {ClickedContact && ClickedContact.name}
                </a>

                <div className='mb-0 lh-1'>
                  <span className='badge badge-success badge-circle w-10px h-10px me-1'></span>
                  <span className='fs-7 fw-bold text-gray-400'>Active</span>
                </div>
              </div>
            </div>

            <div className='card-toolbar'>
              <div className='me-n3'>
                <button
                  className='btn btn-sm btn-icon btn-active-light-primary'
                  data-kt-menu-trigger='click'
                  data-kt-menu-placement='bottom-end'
                  data-kt-menu-flip='top-end'
                >
                  <i className='bi bi-three-dots fs-2'></i>
                </button>
                <Dropdown1 />
              </div>
            </div>
          </div>
         {ClickedContact && <ChatInner Data={ClickedContact} /> } 
        </div>
      </div>
      <Modal
        open={AddContactopen}
        onClose={()=>setAddContactopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" style={{textAlign:"center",fontWeight:"bold"}} >Add Contect</Typography>
        <TextField id="outlined-basic" label="USER NAME" value={addContactData.username} name='username' onChange={handelContectChange} variant="outlined" style={{width:"100%",marginTop:"20px"}}/>
        <TextField id="outlined-basic" label="EMAIL" variant="outlined" value={addContactData.email} name='email' onChange={handelContectChange} style={{width:"100%",marginTop:"20px"}}/>
            
            <Box style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
            <Button variant="contained" size='large' onClick={HandelAddContect}>ADD</Button>
            </Box>
        
        </Box>
      </Modal>
    </div>
  )
}

export {Private}
