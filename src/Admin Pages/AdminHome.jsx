import React from 'react'

import AdminSideBar from './AdminSideBar'

function AdminHome() {
  return (
    <>
    <AdminSideBar/>
     {/* <!-- Page Content  --> */}
     <div id="content conatiner w-100 " style={{height:"100vh", marginLeft:'25%',marginRight:'3%',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <h1 className='h1' style={{display:"inline-block"}}>Welcome To Admin Portal</h1>
    </div>
 </>
  )
}

export default AdminHome