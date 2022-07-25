import React from "react";

const users = [
    {
        fullName:"Satyaki Saha",
        age:28,
        phones: [
            {home: 8274973680},
            {own: 9051272594}
        ]
    },
    {
        fullName:"Somnath Saha",
        age:25,
        phones: [
            {home: 123456},
            {own: 369875}
        ]
    },
    {
        fullName:"Somnath Saha",
        age:25,
        phones: [
            {home: 123456},
            {own: 369875}
        ]
    },
    {
        fullName:"Somnath Saha",
        age:25,
        phones: [
            {home: 123456},
            {own: 369875}
        ]
    }
]

export default function Nas(){
    return (

        <div>
            <h1>Nasted List</h1>
            {
                users.map((user, index)=> (
                    <article key={index}>
                        <h3>Full Name : {user.fullName}</h3>
                        <p>Age :{user.age}</p>
                        {
                            user.phones.map((phone, index)=>
                            <div key={index}>
                                <p>Home : {phone.home}</p>
                                <p>Office : {phone.own}</p>
                            </div>)
                        }
                    </article>
                ))
            }
        </div>
    );
}

