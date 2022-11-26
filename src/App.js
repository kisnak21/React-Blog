/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { useContext } from 'react';
import TopBar from './components/topbar/TopBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/settings/Setting';
import DetailPost from './pages/detail/DetailPost';
import WritePost from './pages/writepost/WritePost';
import Home from './pages/home/Home';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Setting /> : <Register />} />
        <Route path="/write" element={user ? <WritePost /> : <Register />} />
        <Route path="/post/:postId" element={<DetailPost />} />
      </Routes>
    </Router>
  );
}

export default App;
