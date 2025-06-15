import React from 'react'
import "../Styles/Contact.css"


function Contact() {
  return (
    <div id='Main_Contact_Div'>
      <h1 id='Title'>Contact</h1>
      <div id="InputFeild">
        <form action="submit">

          <div id='Feilds'>

            <div className='DataFeild'>
              <label htmlFor="name" className='Text'>Name :</label>
              <input type="text" name="name" id="Name" className='InputBox' placeholder='Enter Your Name' />
            </div>

            <div className='DataFeild'>
              <label htmlFor="email" className='Text'>Email :</label>
              <input type="email" name="email" id="Email" className='InputBox' placeholder='Enter Your Email' />
            </div>

            <div className='DataFeild'>
              <label htmlFor="message" className='Text'>Message :</label>
              <input type='text' name="message" id="Message" className='InputBox' placeholder='Enter Your Message' />
            </div>

          </div>

        </form>
      </div>
    </div>
  )
}

export default Contact