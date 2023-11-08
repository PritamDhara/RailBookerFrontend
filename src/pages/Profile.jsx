import React, { useEffect,useState} from 'react'
import { useSelector } from 'react-redux';
import Navber from './Navber'
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth';
import { Link, useNavigate } from 'react-router-dom';

function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = ()=>{
        dispatch(logout());
        navigate("/")
    }

    const { username } = useSelector((state) => state.auth.value);
    const[user,setUser] = useState({
        
            "userId": '',
            "userName": '',
            "userEmail": '',
            "mobile": '',
            "password": '',
            "gender": '',
            "age": '',
            "address": '',
            "role": ''
        
    });


    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get("http://localhost:9093/ticket/viewTicketsByMail/pritam012@Gmail.com");
                fetch('http://localhost:9092/user/getUserByEmailId/'+username)
                    .then((response) => response.json())
                    .then((data) => setUser(data));
                console.log(user);
                
            } catch (error) {
                alert(error);
            }
        }
        fetchData();
    }, [])


    return (
    <>
    <Navber/>

            <section style={{backgroundColor:"#eee;",marginTop:"7rem"}}>
            {
                                
                <div class="container py-5">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card mb-4">
                                <div class="card-body text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                        class="rounded-circle img-fluid" style={{width: 150}} />
                                    <h5 class="my-3">{user.userName}</h5>
                                   
                                    <p class="text-muted mb-4">{user.address}</p>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-lg-8">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Full Name</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">{user.userName}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Email</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">{user.userEmail}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <p class="mb-0">Phone</p>
                                            </div>
                                            <div class="col-sm-9">
                                                <p class="text-muted mb-0">{user.mobile}</p>
                                            </div>
                                        </div>
                                        <hr/>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Age</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{user.age}</p>
                                                </div>
                                            </div>
                                            <hr/>
                                                <div class="row">
                                                    <div class="col-sm-3">
                                                        <p class="mb-0">Address</p>
                                                    </div>
                                                    <div class="col-sm-9">
                                                        <p class="text-muted mb-0">{user.address}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='btn btn-warning'> Update Profile</button>
                                        <button className='btn btn-danger mx-3' onClick={logoutHandler}> Log Out</button>
                                </div>
                                
                            </div>
                        </div>
       }
                    </section>

                </>
                )
}

                export default Profile