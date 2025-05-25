import {Link} from "react-router-dom";
export default function SignUp() {
  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='font-semibold text-3xl text-center my-7'>Sign Up</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-200 rounded-lg p-3'/>
        <input type="email" placeholder='Email' id='email' className='bg-slate-200 rounded-lg p-3'/>
        <input type="text" placeholder='password' id='password' className='bg-slate-200 rounded-lg p-3'/>
        <button className='bg-gray-800 p-3 text-white rounded-lg hover:opacity-95 uppercase disabled:opacity-80'>Sign Up</button>
      </form>
      <div className="flex gap-1 my-4">
        <p>Have an account ? </p>
        <Link to={'/signin'}><span className="text-blue-500">Sign In</span></Link>
      </div>
    </div>
  )
}
