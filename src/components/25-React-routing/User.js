import React, {useState} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';


const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    
    // const {userid} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({name: name, age: age});
    }
  return (
    <div>
        <h1>User</h1>

        <form onSubmit={handleSubmit}>
        <input type="text" value={name}
        placeholder="name" 
        onChange={(e) => {
            setName(e.target.value)
        }}></input>
        <input type="number" value={age}
        placeholder="age" 
        onChange={(e) => {
            setAge(e.target.value)
        }}></input>

        <button type='submit'>Find user</button>
        </form>
        {/* <h1>{searchParams.get("id")}</h1>
        <h1>{searchParams.get("age")}</h1>
        <h1>{searchParams.get("name")}</h1> */}
    </div>
  )
}

export default User;