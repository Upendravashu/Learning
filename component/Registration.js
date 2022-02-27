import React, { useState } from 'react';

const Registration = () => {
    const[userData,setUserData]=useState({
        name:"",
        email:"",
        password:"",
        mobile:""
    })

    const handleChange=(e)=>{
        const{name,value}=e.target
        setUserData({...userData,[name]:value})
    }
    const submitData= (e) =>{
       console.log(userData)
    }
  return (
    <>
        <div className='container'>
            <form>
                Name:<input 
                    type="text"
                    className='form-control my-3'
                    placeholder='Enter Your Name'
                    name='name'
                    value={userData.name}
                    onChange={handleChange}
                />

                    Email:<input 
                    type="email"
                    className='form-control my-3'
                    placeholder='Enter Your Email'
                    name='email'
                    value={userData.email}
                    onChange={handleChange}
                />

                    Password:<input 
                    type="password"
                    className='form-control my-3'
                    placeholder='Enter Your Password'
                    name='password'
                    value={userData.password}
                    onChange={handleChange}
                />

                    MobileNo:<input 
                    type="number"
                    className='form-control my-3'
                    placeholder='Enter Your MobileNo'
                    name='mobile'
                    value={userData.mobile}
                    onChange={handleChange}
                />
                <button type='button' onClick={submitData} className="btn btn-secondary">Submit</button>

            </form>
        </div>
    </>
  )
}
export default Registration;