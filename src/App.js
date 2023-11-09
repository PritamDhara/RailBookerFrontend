import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import AllTrain from './pages/AllTrains';
import Payment from './pages/Payment';
import ViewYourTicket from './pages/ViewYourTicket';
import AdminHome from './Admin Pages/AdminHome';
import AddTrain from './Admin Pages/AddTrain';
import UserHome from './pages/UserHome';
import ViewAllTrain from './Admin Pages/ViewAllTrain';
import ViewAllTickets from './Admin Pages/ViewAllTickets';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import BookTicket from './pages/BookTicket';
import PageNotFound from './pages/PageNotFound';
import { useSelector } from 'react-redux';
import SignupForm from './pages/SignupForm';

function App() {

  const { isLoggedIn } = useSelector((state) => state.auth.value);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path='/' element={<Login />}></Route> */}
        {/* <Route exact path='/' element={< Home />}></Route> */}
        <Route exact path='/' element={< UserLogin />}></Route>
        <Route exact path='/userregister' element={< UserRegister />}></Route>
        {/* <Route exact path='/adminlogin' element={< AdminLogin />}></Route> */}
        {/* <Route exact path='/adminregister' element={< AdminRegister />}></Route> */}
        <Route exact path='/alltrains' element={isLoggedIn ? <AllTrain /> : <Navigate to="/" replace />}></Route>
        <Route exact path='/payment' element={< Payment />}></Route>
        <Route exact path='/viewTicket' element={isLoggedIn ? <ViewYourTicket /> : <Navigate to="/" replace />}></Route>
        <Route exact path='/adminhome' element={isLoggedIn ? <AdminHome /> : <Navigate to="/" replace />}></Route>
        <Route exact path='/addtrain' element={isLoggedIn ? <AddTrain /> : <Navigate to="/" replace />}></Route>
        <Route exact path='/userhome' element={isLoggedIn ? <UserHome/> : <Navigate to="/" replace />}></Route>
        <Route exact path='/viewalltrain' element={isLoggedIn ? <ViewAllTrain /> : <Navigate to="/" replace />}></Route>
        <Route exact path='/viewalltickets' element={isLoggedIn ? <ViewAllTickets /> : <Navigate to="/" replace />}></Route>
        {/* <Route exact path='/profile' element={< Profile />}></Route> */}
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/" replace />}
        />
        <Route exact path='/about' element={isLoggedIn ? <AboutUs /> : <Navigate to="/" replace />}></Route>
        <Route exact path='/contact' element={isLoggedIn ? <ContactUs /> : <Navigate to="/" replace />}></Route>
        <Route exact path='/bookticket' element={isLoggedIn ? <BookTicket /> : <Navigate to="/" replace />}></Route>
        <Route exact path='/sup' element={< SignupForm />}></Route>
        <Route exact path='/404' element={< PageNotFound />}></Route>
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
