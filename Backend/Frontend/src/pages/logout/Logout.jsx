import React from 'react'
import UseLogout from '../../hooks/UseLogout'
import { toast } from 'react-hot-toast';
const logout = () => {
  const { loading, logout } = UseLogout();
    
  
  return (
    <div className='flex items-center flex-col'>
      <h1 className="font-extrabold text-sky-400 p-2 text-xl">
        <span>Open</span>
        <span className="text-yellow-600"> Chat</span>
      </h1>

      <button className="btn btn-info font-bold text-white " onClick={logout}>
        Click Here To Login
      </button>
    </div>
  );
}

export default logout