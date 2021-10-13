import { useState } from 'react';
import Header from './componenets/Header';
import JobList from './componenets/JobList';
import Job from './componenets/Job';
import data from './data.json';

function App() {
  const [visibleJobs, setVisibleJobs] = useState(data);
  return (
    <main>
      <Header />
      <Job />
    </main>
  );
}

export default App;
