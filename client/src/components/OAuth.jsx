import {GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";
import { app } from "../firebase.js";
import {useDispatch} from "react-redux";
import {signInSuccess} from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";
export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/google',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      })
      const data = await res.json();
      dispatch(signInSuccess(data));
    } catch (error) {
      console.log("Can't login with google", error);
    }
  }
  return (
    <button type="button" onClick={handleGoogleClick} className="bg-red-700 text-white p-3 rounded-lg uppercase opacity-95">Continue with Google</button>
  )
}