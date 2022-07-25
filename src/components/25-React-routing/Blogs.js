import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { blogsData } from './Data';

const Blogs = () => {

  const [blogs, setBlogs] = useState(blogsData);
  const truncateString=(str, num)=>{
    if(str.length > num){
      return str.slice(0,num) + "...";
    }
    else{
      return str;
    }
  }
  return (
    <div>
         <div>
        <h1>Blog page</h1>

        <section>
          {blogs.map((blog)=>{
              const {id, title, body} = blog;

            return <article key={id}>
                <h3>{title}</h3>

                <p>{truncateString(body, 100)}</p>
                
                <Link to={title} state={{id, title, body}}>Larn more</Link>
            </article>
          })}
        </section>

    </div>
    </div>
  )
}

export default Blogs