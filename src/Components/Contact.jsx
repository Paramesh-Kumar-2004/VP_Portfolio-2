import React, { useState } from 'react'
import "../Styles/Contact.css"



function Contact() {

  const [FormData, setFormData] = useState({
    UserName: "",
    UserEmail: "",
    Message: ""
  })


  const HandleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }


  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData)
    console.log("User Name :", FormData.UserName)
    console.log("User Email :", FormData.UserEmail)
    console.log("Message :", FormData.Message)

    setFormData({
      UserName: "",
      UserEmail: "",
      Message: ""
    })
  }

  return (
    <div id='Main_Contact_Div'>
      <h1 id='Title'>Contact</h1>


      <form onSubmit={HandleSubmit} id='form'>
        <div id="UserName">
          <label className='label'>Name :</label><br />
          <input
            type="text"
            name='UserName'
            placeholder='Enter Your Name'
            value={FormData.UserName}
            onChange={HandleOnChange}
            required
          />
        </div>

        <div id="UserEmail">
          <label className='label'>Email :</label><br />
          <input
            name='UserEmail'
            type="email"
            placeholder='Enter Your Email'
            value={FormData.UserEmail}
            onChange={HandleOnChange}
            required
          />
        </div>

        <div id="UserMessage">
          <label className='label'>Message :</label><br />
          <input
            name='Message'
            placeholder='Enter Your Message'
            onChange={HandleOnChange}
            value={FormData.Message}
            type="text"
            required
          />
        </div>

        <button type="submit" id='SendButton'>Send</button>

      </form>
    </div>
  )
}

export default Contact