import {Link, useNavigate} from "react-router-dom";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice.js";
import {useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import OAuth from "../components/OAuth.jsx";
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
      setFormData({...formData, [e.target.id]: e.target.value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json();
    if(data.success === false){
      dispatch(signInFailure(data.message));
      return;
    }
    dispatch(signInSuccess(data));
     navigate('/');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  }
  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='font-semibold text-3xl text-center my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" placeholder='Email' id='email' className='bg-slate-200 rounded-lg p-3'
          onChange={handleChange}/>
        <input type="text" placeholder='password' id='password' className='bg-slate-200 rounded-lg p-3'
          onChange={handleChange}/>
        <button className='bg-gray-800 p-3 text-white rounded-lg hover:opacity-95 uppercase disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-1 my-4">
        <p>Dont have an account ? </p>
        <Link to={'/signup'}><span className="text-blue-500">Sign Up</span></Link>
      </div>
      <p className="text-red-500 mt-4">
        {error ? error || "Something went wrong": ""}
      </p>
    </div>
  )
}
