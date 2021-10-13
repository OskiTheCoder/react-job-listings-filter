import React from 'react';
import './Job.css';

const Job = (props) => {
  return (
    <div className='job-container'>
      <div className='job-heading'>
        <div className='company-logo'>
          <img
            className='logo'
            src={require('../images/photosnap.svg').default}
            alt='logo'
          />
        </div>
        <div className='job-description'>
          <span className='company-name'>Photosnap</span>
          <h1 className='job-title'>Senior Frontend Developer</h1>
          <span className='job-details'>
            1d ago &#183; Full Time &#183; USA Only
          </span>
        </div>
      </div>
      <div className='skills'>
        <span className='skill'>Frontend</span>
        <span className='skill'>Frontend</span>
        <span className='skill'>Frontend</span>
        <span className='skill'>Frontend</span>
        <span className='skill'>Frontend</span>
      </div>
    </div>
  );
};

export default Job;
