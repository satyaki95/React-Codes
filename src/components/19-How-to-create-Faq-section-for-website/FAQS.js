import React, { useState } from 'react'

import { faqsData } from "./Data";

import FAQ from './FAQ';

import style from "./Faqs.module.css";

const FAQS = () => {
  
    const [faqs, setFaqs] = useState(faqsData);
  
  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <h1 className={style.h1}>FAQS</h1>
        {faqs.map(faq => <FAQ key={faq.id} {...faq} />)}
      </section>
    </main>
  )
}

export default FAQS