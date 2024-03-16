import React from 'react';
import { createContext } from 'react';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav';
import Login from './components/Login';
import { Outlet } from 'react-router-dom';
import Logout from './components/Logout';
import News from './components/News';
import ErrorPage from './components/ErrorPage';
import Job_Single from './components/Job_Single';
import SignUp from './components/SignUp';
import Company from './components/Company';
import Blog from './components/Blog';

import ChatPage from './components/ChatPage';
import { Ext } from './components/Ext';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/style.css';



import { useReducer } from 'react';
import { initialState, reducer } from './reducer/UseReducer';
import Blog_Single from './components/Blog_Single';
import Brows from './components/Brows';
import Candidates from './components/Candidates';
import Contact from './components/Contact';
import New_post from './components/New_post';

import Form from './components/Form';
import Profile from './components/Profile';
// import Draft from './compnents/Draft';
// import AddAllComment from './compnents/AddAllComments';
// import AddAllPost from './compnents/AddAllPost';
export const userContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          element={
            <>
              <Nav />
              <Outlet />
              <News />
              <Footer />

            </>
          }
        >
          <Route path='/' element={<Home />} />

          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/register' element={<SignUp />} />

          <Route path='/logout' element={<Logout />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/browser' element={<Brows />} />
          <Route path='/blog_single' element={<Blog_Single />} />
          <Route path='/job_single' element={<Job_Single />} />
          <Route path='/candidate' element={<Candidates />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/post' element={<New_post />} />
          <Route path='/form' element={<Form />} />
          <Route path='/chat' element={<ChatPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/company' element={<Company />} />
          <Route path='/layout' element={<Ext />} />





          <Route path='/*' element={<ErrorPage />} />

        </Route>
      </Routes>


    </userContext.Provider>
  );
}
export default App;
