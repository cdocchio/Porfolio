import React from 'react'
import '../css/form.css'
import emailjs from '@emailjs/browser'

const userID = 'nqTUT9n5mlo2Fxuia';
const templateID = 'template_bid3fk9';
const serviceID = 'service_hgfhwj3';



//Mailer Component that will render a HTML Form with t
const Mailer = () => {
const sendEmail = (event) =>{
  //
  event.preventDefault();
  emailjs.sendForm(serviceID,templateID , event.target,userID)
  .then(response=> console.log(response))
  .catch(error => console.log(error))
}
 
  return (
    
    <div className='div-form'>
   <h1 className='title-form'>Contact Me</h1>
   <form className='form-mail' onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name='user_name' />
    <hr />
    <label>Email</label>
    <input type="email" name='user_email' />
    <hr />
    <label>Message</label>
    <textarea name="user_message" id="" cols="30" rows="10"></textarea>
    <hr />
    <button>Send</button>
   </form>

    </div>
  
   
  )
}

export default Mailer