import React from 'react';
import './Job.css';

const Job = (props) => {
  const filterClick = (event) => {
    const filterName = event.target.innerHTML;
    props.handleFilter(filterName);
  };
  return (
    <div className='job-container'>
      <div className='company-logo'>
        <img
          className='logo'
          src={require(`../images/${props.logo}`).default}
          alt='logo'
        />
      </div>
      <div className='job-heading'>
        <div className='job-description'>
          <div className='heading-info'>
            <span className='company-name'>{props.company}</span>
            {props.new && <span className='new'>NEW!</span>}
            {props.featured && <span className='featured'> FEATURED</span>}
          </div>
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
        <span className='role' onClick={filterClick}>
          {props.role}
        </span>
        <span className='level' onClick={filterClick}>
          {props.level}
        </span>
        {props.languages.length > 0 &&
          props.languages.map((language) => (
            <span key={language} className='language' onClick={filterClick}>
              {language}
            </span>
          ))}
        {props.tools.length > 0 &&
          props.tools.map((tool) => (
            <span key={tool} className='tool' onClick={filterClick}>
              {tool}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Job;
