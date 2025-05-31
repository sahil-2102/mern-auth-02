import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const {currentUser} = useSelector(state => state.user);
  return (
    <div className='bg-slate-400'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to={'/'}><h1 className='text-3xl font-bold text-blue-950'>Auth App</h1></Link>
            <ul className='flex justify-center items-center gap-4 '>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/about'}><li>About</li></Link>
                <Link to={'/profile'}>
                {
                  currentUser ? (<img className="h-7 w-7 rounded-full object-cover" 
                    src ={currentUser.profilePicture} alt="profile" />)
                  : (<li>Sign In</li>)
                }
                </Link>
            </ul>
        </div>
    </div>
  )
}
