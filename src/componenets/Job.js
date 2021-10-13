import React from 'react';
import './Job.css';

const Job = (props) => {
  return (
    <div className='job-container'>
      <div className='job-heading'>
        <div className='company-logo'>
          <img className='logo' src={`images/${props.logo}`} alt='logo' />
        </div>
        <div className='job-description'>
          <span className='company-name'>{props.company}</span>
          <h1>{props.position}</h1>
          <div className='job-details'>
            <span className='date-posted'>{props.postedAt}</span>
            <span className='dot'> &#183; </span>
            <span className='job-type'> {props.contract} </span>
            <span className='dot'> &#183; </span>
            <span className='job-location'> {props.location} </span>
          </div>
        </div>
      </div>
      <div className='skills'>
        <span className='skill'>{props.role}</span>
        <span className='skill'>{props.level}</span>
        {props.languages.length > 0 &&
          props.languages.map((language) => (
            <span className='skill'>{language}</span>
          ))}
        {props.tools.length > 0 &&
          props.tools.map((tool) => <span className='skill'>{tool}</span>)}
      </div>
    </div>
  );
};

export default Job;
