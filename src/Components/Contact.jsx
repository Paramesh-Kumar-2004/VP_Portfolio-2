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
    alert(FormData)
  }

  return (
    <div id='Main_Contact_Div'>
      <h1 id='Title'>Contact</h1>
      <form onSubmit={HandleSubmit}>

        <div id="UserName">
          <label>Name :</label><br />
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
          <label>Email :</label><br />
          <input
            name='UserEmail'
            type="email"
            placeholder='Enter Your Email'
            value={FormData.UserEmail}
            onChange={HandleOnChange}
            required
          />
        </div>

        <button type="submit">Send</button>

      </form>
    </div>
  )
}

export default Contact