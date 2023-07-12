import { ToastContainer } from 'react-toastify';
import './App.css';
import SignUp from './pages/SignUp';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <SignUp/>}/>
      </Routes>
    <ToastContainer/>
    </div>
  );
}

export default App;
