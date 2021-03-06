import React, { Component } from 'react';

class Resume extends Component {
 
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>
          {education.description}<br/> 
          {education.description1}<br/>
        </p>
        <h1>{education.des}</h1>
        <p>{education.description2}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}>
          <h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;
              </span> <em className="date">{work.years}</em>
              </p>
              {work.description}<br/>  
             {work.description1}<br/>
             {work.description2}<br/>
             {work.description3}<br/>
             {work.description4}
        </div>
      })
 
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
        
    </div>
   </section>
    );
  }
}

export default Resume;
