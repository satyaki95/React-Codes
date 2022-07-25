import React, { useState } from 'react'
import style from './Style.module.css'

export default function Object() {

    const [user, setUser] = useState({name: '',email: '',password: ''})
    const {name,email,password} = user;


   
    const handelChange = (e) => {
        const fieldName = e.target.value;
       
        setUser({...user,[e.target.name]: e.target.value})
        
    }


    const handelSubmit = (e) =>{
        console.log("Form is submited");
        let userInfo = {
            name : name,
            email : email,
            password : password
        }
        console.log(userInfo);
        e.preventDefault();
    }

  return (
    <div>
       <h1>Registration</h1>
       <form action='' onSubmit={handelSubmit}>
        <div className={style.formGroup}>
        <label htmlFor='name'>Name :</label>
        <input type={"text"} name="name" id='name'value={name} onChange={handelChange} required></input>
        </div>

        <div className={style.formGroup}>
        <label htmlFor='email'>Email :</label>
        <input type={"email"} name="email" id='email'value={email} onChange={handelChange} required></input>
        </div>

        <div className={style.formGroup}>
        <label htmlFor='password'>Password :</label>
        <input type={"password"} name="password" id='password'value={password} onChange={handelChange} required></input>
        </div>
        <div className={style.formGroup}>
            <button type='submit'>Register</button>
        </div>
       </form>
    </div>
  )
}

