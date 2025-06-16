import React, { useState } from 'react'
import "../Styles/Contact.css"



function Contact() {

  const [FormData, setFormData] = useState({
    UserName: "",
    UserEmail: "",
    Message: ""
  })

  const HandleSubmit = (e) => {
    alert(e.target.value)
  }

  return (
    <div id='Main_Contact_Div'>
      <h1 id='Title'>Contact</h1>
      <form onSubmit={HandleSubmit}>

        <div id="name">
          
        </div>


      </form>
    </div>
  )
}

export default Contact