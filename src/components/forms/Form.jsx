import React from 'react'
import './form.css'
const form = () => {
  return (
    <div className='container'>
        <div className="maindiv">
            <div className="left">
                <h2> DOCAPPT </h2>

                <h1> Book your <br/> appointment with <br/> certified doctor. </h1>
                <br/><br/><br/>
                <p> Get ahead and schedule an appointment, skip the long<br/> waiting queue. Get ahead schedule an appointment,<br/> skip the long waiting queue. </p>
            </div>

            <br/>
            <div className="right">
                <br/><br/><br/><br/><br/><br/>
                <h3> Sign Up </h3>
                <br/>
                <p> Have an account? Log in </p>

                <br/><br/><br/><br/>
                <form action="#">
                    <div className="leftform">
                    <label for="fname"> First Name </label>
                    <br/><br/>
                     <input type="text" id="fname" name="fname"/>
                     <br/><br/>
                     <label for="lname"> Email Address </label>
                    <br/><br/>
                     <input type="text" id="lname" name="lname"/>
                     <br/><br/>
                     <label for="lname"> Password </label>
                    <br/><br/>
                     <input type="text" id="lname" name="lname"/>
                     <br/><br/>
                    </div>

                    <div className="rightdiv">
                    <label for="lname"> Last Name </label>
                    <br/><br/>
                    <input type="text" id="lname" name="lname"/>
                     <br/><br/>
                    <label for="lname"> Phone Number </label>
                    <br/><br/>
                    <input type="text" id="lname" name="lname"/>
                     <br/><br/>
                     <label for="lname"> Confirm Password </label>
                    <br/><br/>
                    <input type="text" id="lname" name="lname"/>
                     <br/><br/>
                    </div>
                </form>
                    <input className='submit__button' type="submit" value="Create Account"/>
            </div>
        </div>
    </div>
  )
}

export default form