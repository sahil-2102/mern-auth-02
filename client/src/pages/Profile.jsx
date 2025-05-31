import {useSelector} from "react-redux";

export default function () {
  const {currentUser} = useSelector(state => state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center
        my-7
      '>Profile</h1>
      <form className="flex flex-col gap-4">
        <img className="h-24 w-24 self-center rounded-full cursor-pointer object-cover"
       src = {currentUser.profilePicture} alt="profile" />
       <input defaultValue={currentUser.username} type="text" id="username" placeholder="Username" 
       className="p-3 bg-slate-200 rounded"
       />
       <input defaultValue={currentUser.email} type="email" id="email" placeholder="Email"
        className="p-3 bg-slate-200"
        />
       <input type="password" id="password" placeholder="password" 
       className="p-3 bg-slate-200"
       />
       <button className="bg-indigo-900 p-3 rounded-lg disabled:opacity-80 text-white hover:opacity-95 uppercase">Update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer ">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  )
}
