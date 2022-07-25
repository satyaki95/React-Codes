import React, { useState } from 'react'

import {  FaMinus, FaPlus } from 'react-icons/fa';

import style from "./Faq.module.css";

const FAQ = ({id, title, desc}) => {

    const [toggle, setToggle] = useState(false);
  return (
    <article className={style.faq}>
        <div>
            <h4>{title}</h4>
            <button onClick={() => {setToggle(!toggle)}}>
                {toggle ? <FaMinus /> : <FaPlus />}
            </button>
            
        </div>
        {toggle && <p>{desc}</p> }
        
    </article>
  )
}

export default FAQ;