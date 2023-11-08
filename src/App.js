import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
            <Routes>
                 {/* <Route exact path='/' element={<Login />}></Route> */}
                 {/* <Route exact path='/' element={< Home />}></Route> */}
                 <Route exact path='/' element={< UserLogin />}></Route>
                 <Route exact path='/userregister' element={< UserRegister />}></Route>
                 {/* <Route exact path='/adminlogin' element={< AdminLogin />}></Route> */}
                 {/* <Route exact path='/adminregister' element={< AdminRegister />}></Route> */}
                 <Route exact path='/alltrains' element={< AllTrain />}></Route>
                 <Route exact path='/payment' element={< Payment />}></Route>
                 <Route exact path='/viewTicket' element={< ViewYourTicket />}></Route>
                 <Route exact path='/adminhome' element={< AdminHome />}></Route>
                 <Route exact path='/addtrain' element={< AddTrain />}></Route>
                 <Route exact path='/userhome' element={< UserHome />}></Route>
                 <Route exact path='/viewalltrain' element={< ViewAllTrain />}></Route>
                 <Route exact path='/viewalltickets' element={< ViewAllTickets />}></Route>
                 <Route exact path='/profile' element={< Profile />}></Route>
                 <Route exact path='/about' element={< AboutUs />}></Route>
                 <Route exact path='/contact' element={< ContactUs />}></Route>
                 <Route exact path='/bookticket' element={< BookTicket />}></Route>
          </Routes>
          
      </BrowserRouter>
    
  );
}

export default App;
