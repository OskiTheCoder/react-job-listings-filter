import React from 'react';
import Job from './Job';
import './JobList.css';

const JobList = (props) => {
  return (
    <>
      {props.jobs.map((job) => (
        <Job
          key={job.id}
          company={job.company}
          logo={job.logo}
          new={job.new}
          featured={job.featured}
          position={job.position}
          role={job.role}
          level={job.level}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          languages={job.languages}
          tools={job.tools}
          handleFilter={props.handleFilter}
        />
      ))}
    </>
  );
};

export default JobList;
