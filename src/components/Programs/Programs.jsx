import React from 'react';
import "./Programs.css";
import{programsData} from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png"
const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* header */}
        <div className="programs-header" id="programs">
          <span className='stroke-text'>Explore our</span>
          <span>programs</span>
          <span className='stroke-text'>to shape your</span>
        </div>
        <div className="program-categories">
          {programsData.map((program)=>(
            <div className="category">
               <span>{program.image}</span>
               <span>{program.heading}</span>
               <span>{program.details}</span>
               <div className="join-now">
               <span>join now</span>
               <img src={RightArrow} alt="" />
               </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Programs
