import {Link} from "react-router-dom";
import { useState } from "react";
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [Error, setError] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const handleChange = (e) => {
      setFormData({...formData, [e.target.id]: e.target.value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json();
    console.log(data);
    setIsLoading(false);
    if(data.success === false){
      setError(true);
      return;
    }
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  }
  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='font-semibold text-3xl text-center my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-200 rounded-lg p-3'
          onChange={handleChange}/>
        <input type="email" placeholder='Email' id='email' className='bg-slate-200 rounded-lg p-3'
          onChange={handleChange}/>
        <input type="text" placeholder='password' id='password' className='bg-slate-200 rounded-lg p-3'
          onChange={handleChange}/>
        <button className='bg-gray-800 p-3 text-white rounded-lg hover:opacity-95 uppercase disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className="flex gap-1 my-4">
        <p>Have an account ? </p>
        <Link to={'/signin'}><span className="text-blue-500">Sign In</span></Link>
      </div>
      <p className="text-red-500 mt-4">
        {Error && "Something went wrong!"}
      </p>
    </div>
  )
}
