import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../assets/sidebar.css'
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth';
import { Link, useNavigate } from 'react-router-dom';

function AdminSideBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = ()=>{
        dispatch(logout());
        navigate("/")
    }

  return (
    <>
 <div class="wrapper">
        {/* <!-- Sidebar  --> */}
        
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar" style={{height:"100%",position:'fixed'}}>
            <ul class="list-unstyled components">
                <Link to={'/adminhome'} style={{textDecoration:"none"}}>
                    <li className='active'>
                <p>Admin Workplace</p>
                </li>
                </Link>
                <Link to={'/addtrain'} style={{textDecoration:"none"}}><li className="active">
                 <a href='#'>Add Train</a>
                </li></Link>
               <Link to={'/viewalltrain'} style={{textDecoration:"none"}}> <li className="active">
                    <a href="#">View All Train</a>
                </li></Link>
               <Link to={'/viewalltickets'} style={{textDecoration:"none"}}> <li className="active">
                    <a href='#'>View All Tickets</a>
                </li>
                </Link>
                {/* <li class="active">
                    <a href="#">Portfolio</a>
                </li>
                <li class="active">
                    <a href="#">Contact</a>
                </li> */}
            </ul>
            
            <button className='btn btn-danger ml-3' onClick={logoutHandler}> Log Out</button>
            
        </nav>
    </div>
    </>
  )
}

export default AdminSideBar
