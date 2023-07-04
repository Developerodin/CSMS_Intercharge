/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useState,useEffect} from 'react'
import clsx from 'clsx'
import {
  toAbsoluteUrl,
  defaultMessages,
  defaultUserInfos,
  MessageModel,
  UserInfoModel,
  messageFromClient,
} from '../../helpers'
import { socket } from '../../../socket'



const bufferMessages = []

const ChatInner = ({isDrawer = false,Data}) => {
  const userData=JSON.parse(localStorage.getItem('User'))
  const userEmail=userData.email;
  const created_by=userData._id;
  const username=userData.name;
  const userId = userData._id;
  const [chatUpdateFlag, toggleChatUpdateFlat] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState(bufferMessages)
  const [userInfos] = useState(defaultUserInfos)
  const [Sendmessage, setSendMessage] = useState('');
  const [IncomingMessage, setIncomingMessage] = useState('')



  useEffect(() => {
    let count = 1;
    
    const handleChatMessage = ({ id, message, sender_id, receiver_id, file_upload, createdAt, receiverName, receiverImage, myid, flag }) => {
      console.log('on msg', message);
      if (sender_id !== userId) {
        const newMessage = {
          user: 2,
          type: 'in',
          text: message,
          time: 'Just now',
        };
  
        setMessages(prevMessages => [...prevMessages, newMessage]);
        
        // bufferMessages.push(newMessage)
        // setMessages(bufferMessages)
        // toggleChatUpdateFlat(!chatUpdateFlag)
        // setMessage('')
      }
    };
  
    socket.on('chat message', handleChatMessage);
    
    
   
  }, []);

  const sendMessage = () => {
    const newMessage = {
      user: 2,
      type: 'out',
      text: message,
      time: 'Just now',
    }
   

   

    // const updateMessageIO = () => {
    //   // Emit the 'message_update' event
    //   socket.emit('message_update', {
    //     messageId: messageId,
    //     message: message,
    //     receiverId: receiverId,
    //     userId: userId,
    //     flag: flag
    //   });
    
    //   // ...
    // };

    bufferMessages.push(newMessage)
    setMessages(bufferMessages)
    toggleChatUpdateFlat(!chatUpdateFlag)
    setMessage('')
    setTimeout(() => {
      bufferMessages.push(messageFromClient)
      setMessages(() => bufferMessages)
      toggleChatUpdateFlat((flag) => !flag)
    }, 1000)
  }

  const sendMessageIO = () => {
    // Emit the 'chat message' event
    console.log("Sending message to",Data.name)
    socket.emit('chat message', {
      message: message,
      sender_id: userId,
      receiver_id: Data.user_id,
      file_upload: "",
      flag: '0'
    });
    // setSendMessage(message);
    const newMessage = {
      user: 2,
      type: 'out',
      text: message,
      time: 'Just now',
    }

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessage("");
    // bufferMessages.push(newMessage)
    // setMessages(bufferMessages)
    // toggleChatUpdateFlat(!chatUpdateFlag)
    // setMessage('')
  
    // ...
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()
      sendMessageIO()
    }
  }

  const handleFileChange = (e) => {
    // Handle file change event
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div
      className='card-body'
      id={isDrawer ? 'kt_drawer_chat_messenger_body' : 'kt_chat_messenger_body'}
    >
      <div
        className={clsx('scroll-y me-n5 pe-5', {'h-300px h-lg-auto': !isDrawer})}
        data-kt-element='messages'
        data-kt-scroll='true'
        data-kt-scroll-activate='{default: false, lg: true}'
        data-kt-scroll-max-height='auto'
        data-kt-scroll-dependencies={
          isDrawer
            ? '#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer'
            : '#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer'
        }
        data-kt-scroll-wrappers={
          isDrawer ? '#kt_drawer_chat_messenger_body' : '#kt_content, #kt_app_content, #kt_chat_messenger_body'
        }
        data-kt-scroll-offset={isDrawer ? '0px' : '5px'}
      >
        {messages.map((message, index) => {
          const userInfo = userInfos[message.user]
          const state = message.type === 'in' ? 'info' : 'primary'
          const templateAttr = {}
          if (message.template) {
            Object.defineProperty(templateAttr, 'data-kt-element', {
              value: `template-${message.type}`,
            })
          }
          const contentClass = `${isDrawer ? '' : 'd-flex'} justify-content-${
            message.type === 'in' ? 'start' : 'end'
          } mb-10`
          return (
            <div
              key={`message${index}`}
              className={clsx('d-flex', contentClass, 'mb-10', {'d-none': message.template})}
              {...templateAttr}
            >
              <div
                className={clsx(
                  'd-flex flex-column align-items',
                  `align-items-${message.type === 'in' ? 'start' : 'end'}`
                )}
              >
                <div className='d-flex align-items-center mb-2'>
                  {message.type === 'in' ? (
                    <>
                      <div className='symbol  symbol-35px symbol-circle '>
                        <img alt='Pic' src={toAbsoluteUrl(`/media/${userInfo.avatar}`)} />
                      </div>
                      <div className='ms-3'>
                        <a
                          href='#'
                          className='fs-5 fw-bolder text-gray-900 text-hover-primary me-1'
                        >
                          {Data.name}
                        </a>
                        <span className='text-muted fs-7 mb-1'>{message.time}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='me-3'>
                        <span className='text-muted fs-7 mb-1'>{message.time}</span>
                        <a
                          href='#'
                          className='fs-5 fw-bolder text-gray-900 text-hover-primary ms-1'
                        >
                          You
                        </a>
                      </div>
                      <div className='symbol  symbol-35px symbol-circle '>
                        <img alt='Pic' src={toAbsoluteUrl(`/media/${userInfo.avatar}`)} />
                      </div>
                    </>
                  )}
                </div>

                <div
                  className={clsx(
                    'p-5 rounded',
                    `bg-light-${state}`,
                    'text-dark fw-bold mw-lg-400px',
                    `text-${message.type === 'in' ? 'start' : 'end'}`
                  )}
                  data-kt-element='message-text'
                  dangerouslySetInnerHTML={{__html: message.text}}
                ></div>
              </div>
            </div>
          )
        })}
      </div>

      <div
        className='card-footer pt-4'
        id={isDrawer ? 'kt_drawer_chat_messenger_footer' : 'kt_chat_messenger_footer'}
      >
        <textarea
          className='form-control form-control-flush mb-3'
          rows={1}
          data-kt-element='input'
          placeholder='Type a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={onEnterPress}
        ></textarea>
       
        <div className='d-flex flex-stack'>
          <div className='d-flex align-items-center me-2'>
            <button
              className='btn btn-sm btn-icon btn-active-light-primary me-1'
              type='button'
              data-bs-toggle='tooltip'
              title='Coming soon'
            >
              <i className='bi bi-paperclip fs-3'></i>
            </button>
            <button
              className='btn btn-sm btn-icon btn-active-light-primary me-1'
              type='button'
              data-bs-toggle='tooltip'
              title='Coming soon'
            >
              <i className='bi bi-upload fs-3'></i>
            </button>
          </div>
          <button
            className='btn btn-primary'
            type='button'
            data-kt-element='send'
            onClick={sendMessageIO}
          >
            Send
          </button>
        </div>
      </div>



     

      
      
    </div>
  )
}

export {ChatInner}
