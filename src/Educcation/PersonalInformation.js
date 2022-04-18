import React, { useState } from "react"
import '../css/style.css'

export default function PersonalInformation({inputs}) {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    phone: "",
    country: "",
    city: "",
    post: "",
    email: "",
    link: "",
    primary: "",
    secondary: "",
    objective:"", 
    Higher: "",
    countryh: "",
    cityh: "",
    company1: "",
    years1: "",
    proffesion1: "",
    company2: "",
    years2: "",
    proffesion2: "",
    company3: "",
    years3: "",
    proffesion3: "",
    language: "",
    communication: "",
    computer: "",

    
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <>
    <section className='section section-center'>
      <h3 className='header'>Personal Information</h3>
      <div className='name'>
      <h4>Full Name</h4>
      <div className='label'>
      <label for="fname">First name:</label>
      <input type="text" name="fname" value={state.fname} onChange={handleChange} />
      </div>
      <div className='label'>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" value={state.lname} onChange={handleChange}></input>
      </div>
      </div>
      <div className='name'>
      <h4>Contact Address</h4>
      <div className='label'>
      <label for="phone">Phone Number:</label>
      <input type="text" id="phone" name="phone" value={state.phone} onChange={handleChange}></input>
      </div>
      <div className='label'>
      <label for="country">Country:</label>
      <input type="text" id="country" name="country" value={state.country} onChange={handleChange} />
      </div>
      <div className='label'>
      <label for="city">City:</label>
      <input type="text" id="city" name="city" value={state.city} onChange={handleChange} />
      </div>
      <div className='label'>
      <label for="post">Postal Code:</label>
      <input type="text" id="post" name="post" value={state.post} onChange={handleChange} />
      </div>
      </div>
      <div className='name'>
      <h4>Social Links</h4>
      <div className='label'>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" value={state.email} onChange={handleChange} />
      </div>
      <div className='label'>
      <label for="link">Linkdin:</label>
      <input type="link" id="link" name="link" value={state.link} onChange={handleChange} /> 
      </div>
      </div>
    </section>
      <section className="section section-center">
        <h3 className="header">Objective</h3>
        <p><b>Why you want to join us</b></p>
        <textarea className="objective" name="objective" placeholder="write some thing" value={state.objective} onChange={handleChange}></textarea>
      </section>
    <section className='section section-center'>
    <h3 className='header'>Education</h3>
    
      <div className='name'>
      <h4>Schools</h4>
      <div className='label'>
      <label for="primary">Primary School:</label>
      <input type="text" id="primary" name="primary" value={state.primary} onChange={handleChange}></input>
      </div>
      <div className='label'>
      <label for="secondary">Secondary School:</label>
      <input type="text" id="secondary" name="secondary" value={state.secondary} onChange={handleChange}></input>
      </div>
      </div>
      <div className='name'>
      <h4>Higher Education</h4>
      <div className='label'>
      <label for="Higher">Universty / college / TVET Name attended:</label>
      <input type="text" id="Higher" name="Higher" value={state.Higher} onChange={handleChange}></input>
      </div>
      <h4>Universty / college / TVET Name attended Address :</h4>
      <div className='label'>
      <label for="countryh">country:</label>
      <input type="text" id="country" name="countryh" value={state.countryh} onChange={handleChange} />
      </div>
      <div className='label'>
      <label for="cityh">City:</label>
      <input type="text" id="city" name="cityh" value={state.cityh} onChange={handleChange} />
      </div>
      </div>
    </section>

    <section className='section section-center'>
    <h3 className='header'>Work History</h3>
    <div className='name'>
      <div className='label'>
      <label for="company1"><b>Company Name:</b></label>
      <input type="text" id="company" name="company1" value={state.company1} onChange={handleChange} />
      </div>
      <div className='label'>
      <label for="years1">Years of Service:</label>
      </div>
      <input type="text" id="years" name="years1" value={state.years1} onChange={handleChange}></input>
      <div className='label'>
      <label for="fname">In What Proffesion you served:</label>
      <input type="text" id="proffesion1" name="proffesion1" value={state.proffesion1} onChange={handleChange} />
      </div>
      </div>
      
      <div className='name'>
      <div className='label'>
      <label for="company1=2"><b>Company Name:</b></label>
      <input type="text" id="company" name="company2" value={state.company2} onChange={handleChange} />
      </div>
      <div className='label'>
      <label for="years2">Years of Service:</label>
      </div>
      <input type="text" id="years" name="years2" value={state.years2} onChange={handleChange}></input>
      <div className='label'>
      <label for="fname">In What Proffesion you served:</label>
      <input type="text" id="proffesion2" name="proffesion2" value={state.proffesion2} onChange={handleChange} />
      </div>
      </div>

      <div className='name'>
      <div className='label'>
      <label for="company3"><b>Company Name:</b></label>
      <input type="text" id="company" name="company3" value={state.company3} onChange={handleChange} />
      </div>
      <div className='label'>
      <label for="years3">Years of Service:</label>
      </div>
      <input type="text" id="years" name="years3" value={state.years3} onChange={handleChange}></input>
      <div className='label'>
      <label for="fname">In What Proffesion you served:</label>
      <input type="text" id="proffesion3" name="proffesion3" value={state.proffesion3} onChange={handleChange} />
      </div>
      </div>

    </section>

    <section className='section section-center'>
    <h3 className='header'>Skills</h3>
    <div className='name'>
      <div className='label'>
      <label for="language"><b>Languages:</b></label>
      <input type="text" id="language" name="language" value={state.language} onChange={handleChange} placeholder="Flueny in English" />
      </div>
      <div className='label'>
      <label for="communication">Communication: </label>
      </div>
      <input type="text" id="communication" name="communication" value={state.communication} onChange={handleChange} placeholder="Comfortable writing and speaking"></input>
      <div className='label'>
      <label for="computer">Computer Literacy:</label>
      <input type="text" id="computer" name="computer" value={state.computer} onChange={handleChange} placeholder="porficent MS Excel, MS Word and MS PowerPoint" />
      </div>
      </div>
    </section>

    <main>
        <header className='section-center'>
            <h2>{state.fname} {state.lname}</h2>
            <p>Address : {state.city}, {state.country}</p>
            <p>contact Number : {state.phone}</p>
            <p>Email : {state.email}</p>
            <p>Linkdin : {state.link}</p>
            <p>Postal Code: {state.post}</p>
        </header>
        <div className='border'></div>
        <section className='section section-center'>
            <h4>OBJECTIVE</h4>
            <p>
            {state.objective}
            </p>
        </section>
        <div className='border'></div>
        <section className='section section-center'>
            <h4>
                ACADAMIC BACKGROUNDS
            </h4>
            <div className='educ'>
                <p><b>Higher Education :</b></p>
                <p>{state.Higher}; {state.cityh}, {state.countryh}</p>

            </div>
            <div className='educ'>
                <p><b>Secondary School:</b></p>
                <p>{state.secondary}</p>
                
            </div>
            <div className='educ'>
                <p><b>Primary School:</b></p>
                <p>{state.primary}</p>
                
            </div>
        </section>
        <div className='border'></div>
        <section className='section section-center'>
            <h4>WORK EXPERIENCE</h4>
            <ul>
                <li><b>{state.company1}</b>
                <p>{state.years1} Years,</p>
                <p>{state.proffesion1}</p>
                </li>
                <li><b>{state.company2}</b>
                <p>{state.years2} Years,</p>
                <p>{state.proffesion2}</p>
                </li>
                <li><b>{state.company3}</b>
                <p>{state.years3} Years,</p>
                <span>{state.proffesion3}</span>
                </li>
            </ul>
        </section>
        <div className='border'></div>
        <section className='section section-center'>
            <h4>SKILLS</h4>
            <ul>
                <li><b>Language: </b>{state.language}</li>
                <li><b>Communication: </b>{state.communication}</li>
                <li><b>COmputer Literacy: </b>{state.computer}</li>
            </ul>
        </section>
        </main>
  </>
  )
}
