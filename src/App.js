import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './components/add'
import View  from './components/view'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Add />} />
        <Route path='/view' element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
