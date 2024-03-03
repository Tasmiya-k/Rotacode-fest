import React  from "react";

export default function ContactForm() {

  const [formData, setformData] = React.useState("")
  function onChange(event){
    setformData(prevformData =>{
      return{
        ...prevformData,
        [event.target.name]: event.target.value
      }
    })
  }
  return (
    <div className="contact-form">
      <form>
        <div className="contact-form-ele">
          <label className="label">Name</label>
          <input type="text" name="name" className="name"  onChange={onChange} value="formData.name" />
        </div>

        <div className="contact-form-ele">
          <label className="label">Email</label>
          <input type="email" name="email" className="email"  onChange={onChange} value="formData.email"/>
        </div>

        <div className="contact-form-ele">
          <label className="label">Your Message</label>
          <input type="text" name="desc" className="desc" onChange={onChange} value="formData.desc" />
        </div>

        <div className="contact-submit-div">
          <button className="contact-submit">SEND</button>
        </div>
      </form>
    </div>
  );
}
