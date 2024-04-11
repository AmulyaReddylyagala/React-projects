import { useState } from 'react';
import './App.css'
import ColorFlipper from './Components/ColorFlipper/ColorFlipper'
import DataFetching from './Components/DataFetching/DataFetching'

function App() {

  const [project, setProject] = useState(0);

  if (project == 1) {
    return <ColorFlipper />
  }
  if (project == 2)
    return <DataFetching />
  return <>
    <div className='mainDiv'>
      <h2 className='title'>Projects</h2>
      <div className='list'>
        <div className='projects' onClick={() => setProject(1)}>
          Color Filpper
        </div>
        <div className='projects' onClick={() => setProject(2)}>

          Data Feteching
        </div>
      </div>
    </div>
  </>
}

export default App
