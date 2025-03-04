import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClientPage() {
  const [name, setName] = useState("");
  const [password, setPasswaord] = useState("");
   
  
  const navigate = useNavigate();


  return <div className='row'>
  <div className="col-md-9 ">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name=""
              id=""
            />
            <label htmlFor="number">Password</label>
            <input
              value={password}
              onChange={(e) => setPasswaord(e.target.value)}
              type="text"
              name=""
              id=""
            />
            
  <button className="btn btn-dark">

             تسجيل
            </button>
           
          </div>
  </div>;
}
