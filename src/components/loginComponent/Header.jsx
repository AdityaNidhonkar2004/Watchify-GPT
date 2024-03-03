import { useNavigate } from "react-router-dom"
import auth from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../../utils/store/userSlice';
import { changeGPTSearchView } from "../../utils/store/gptSlice";
import { useDispatch } from "react-redux";
import { LOGO, SUPPORTED_LAGUAGES } from "../../utils/constant";
import { changeLanguage } from "../../utils/store/lagnSlice";
import { Link } from "react-router-dom";


const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGPTBtn = () => {
    dispatch(changeGPTSearchView());
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/browse');
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email } = user;


        dispatch(addUser(
          {
            uid: uid,
            displayName: displayName,
            email: email,

          }
        ));


      } else {
        navigate('/');
        dispatch(removeUser());

      }
    });

    // this will be called when our component will be unmounted 
    return () => {
      unsubcribe();

    }

  }, [])

  const GPTSearchStatus = useSelector(store => store.gpt.GPTSearchView);

  const handleLangChange = (e) => {

    dispatch(changeLanguage(e.target.value))
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {

    }).catch((error) => {

    })
  }


  return (
    <div className=" absolute z-50 w-full ">

      <div className="flex flex-wrap sm:justify-between items-center p-2 justify-center">
        <div className="">

          <Link to="/browse">

            <img src={LOGO} alt="netflix" className="sm:w-40 w-28" />
          </Link>


        </div>

        {user &&
          <div >
            {GPTSearchStatus &&
              <select name="" onChange={handleLangChange} id="" className="sm:px-2 px-1 capitalize py-0.5 mr-4 text-sm outline-none rounded bg-cyan-950  text-cyan-600  border-cyan-600 border-2">
                {SUPPORTED_LAGUAGES.map((data) => (
                  <option value={data} key={data} className="capitalize">{data}</option>

                ))}

              </select>
            }
            <button className="px-2 py-1 bg-cyan-950 text-cyan-600 border-cyan-600 border-2 mr-4 rounded text-sm sm:font-bold " onClick={handleGPTBtn}>{GPTSearchStatus ? "Home" : "GPT Search"}</button>
            <button className="px-2 py-1 bg-red-600 text-white mr-4 rounded text-sm sm:font-bold " onClick={handleSignOut}>Sign Out</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Header