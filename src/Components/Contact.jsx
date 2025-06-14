import React from 'react'
import "../Styles/Contact.css"


function Contact() {
  return (
    <div id='Main_Contact_Div'>
      <h1 id='Title'>Contact</h1>
      <div id="InputFeild">
        <form action="submit">

          <div id='Feilds'>

            <div>
              <label htmlFor="name">Name :</label>
              <input type="text" name="name" id="Name" placeholder='Enter Your Name' />
            </div>

            <div>
              <label htmlFor="email">Email :</label>
              <input type="email" name="email" id="Email" placeholder='Enter Your Email' />
            </div>

          </div>

        </form>
      </div>
    </div>
  )
}

export default Contact