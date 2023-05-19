import React, { useState } from 'react'
import validate from './validate';

export default function Form(props) {

    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })
    const [errors, setErrors] = useState({})
    const handleChange = (e)=>{
        const { name, value} = e.target;
        setUserData ({
            ...userData,
            [name]: value
        })
        setErrors(validate({
            ...userData,
            [name]: value,
        }))
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.login(userData);
    }
  return (
    <div>
        <form  onSubmit={handleSubmit}>
            <label > email:</label>
            <input type="text" name='email'
                    value={userData.email}
                    onChange={handleChange} />
                    <p> {errors.email ? errors.email : null }  </p>
            <label > Password</label>
            <input type="password" name='password' onChange={handleChange} value={userData.pass} />
            <p> {errors.password ? errors.password : null }  </p>

            <button type="submit" ></button>
        </form>
    </div>
  )
}
