import { useState } from 'react';
import Header from './componenets/Header';
import FilterList from './componenets/FilterList';
import JobList from './componenets/JobList';
import data from './data.json';

function App() {
  const [showFilterList, setShowFilterList] = useState(false);
  const [visibleJobs, setVisibleJobs] = useState(data);
  const [filteredSkills, setFilteredSkills] = useState([]);

  const handleFilter = (filterName) => {
    if (filteredSkills.includes(filterName)) {
      return;
    }
    const newVisibleJobs = visibleJobs.filter((job) => {
      return (
        filterName === job.role ||
        filterName === job.level ||
        job.languages.includes(filterName) ||
        job.tools.includes(filterName)
      );
    });
    setShowFilterList(true);
    setFilteredSkills((prev) => [...prev, filterName]);
    setVisibleJobs(newVisibleJobs);
  };

  const removeFilterItem = (itemName) => {
    if (filteredSkills.length === 1) {
      clearFilteredItems();
      return;
    }
    const newFilteredSkills = filteredSkills.filter((skill) => {
      return itemName !== skill;
    });

    let copiedData = JSON.parse(JSON.stringify(data));
    const newVisibleJobs = copiedData.filter((job) => {
      return (
        newFilteredSkills.includes(job.role) ||
        newFilteredSkills.includes(job.level) ||
        newFilteredSkills.some((skill) => job.languages.includes(skill)) ||
        newFilteredSkills.some((skill) => job.tools.includes(skill))
      );
    });
    setFilteredSkills(newFilteredSkills);
    setVisibleJobs(newVisibleJobs);
  };

  const clearFilteredItems = () => {
    setVisibleJobs(data);
    setFilteredSkills([]);
    setShowFilterList(false);
  };

  return (
    <main>
      <Header />
      <FilterList
        filteredSkills={filteredSkills}
        removeFilterItem={removeFilterItem}
        clearFilteredItems={clearFilteredItems}
        showFilterList={showFilterList}
      />
      <JobList jobs={visibleJobs} handleFilter={handleFilter} />
    </main>
  );
}

export default App;
