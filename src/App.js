import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import Task from './components/Task';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.value);

  return (
    <Router>
      <div className='App'>
        {/* Instead of switch, we will use Routes */}
        <Routes>
          {/* No need to add exact */}
          {/* Now we can put render prop logic inside element for conditionally rendering components etc... */}
          {/* Any JSX can be written inside element prop */}
          {/* Redirect is changed to Navigate */}
          <Route
            path='/'
            element={!user ? <Login /> : <Navigate to='/profile' />}
          />
          {/* <Login /> */}
          <Route path='/profile' element={<Profile />} />
          {/* <Profile /> */}
          <Route path='/task' element={<Task />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
