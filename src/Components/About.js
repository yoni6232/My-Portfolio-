import React, { Component } from 'react';
import {  WhatsappIcon} from 'react-share'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var GradeDownload = this.props.data.GradeDownload;

    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Yonatan  Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p style={{color:'white'}}>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address" style={{color:'white'}}>
						   <span>{name}</span><br />
						   <span>
						         {city} {state},
                   </span><br />
						   <span>{phone} <br/><a href={"https://wa.me/+972525379476/?text="}>
          <WhatsappIcon
            size={"2.5rem"}
            round={true}
          />
          </a></span><br/>

                     <span>{email} </span>
					   </p>
                  
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                     <a href={GradeDownload} className="button"><i className="fa fa-download"></i>Download Grade Sheet</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
