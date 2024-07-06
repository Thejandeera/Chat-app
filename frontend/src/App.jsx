import './App.css';
import { useState } from 'react';

import Home from './pages/home/Home.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='p-4 h-screen flex items-center justify-center' >
      
      <Home/>
    </div>
  );
}

export default App;
