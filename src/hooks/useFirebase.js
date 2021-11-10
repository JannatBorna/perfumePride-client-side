import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,

} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../pages/Login/Firebase/firebase.init";



firebaseInitialize()

const auth = getAuth();

const useFirebase = () => {

        const [user, setUser] = useState({});
        const [authError, setAuthError] = useState('');

// new user
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');

                
                
               
            })
            .catch((error) => {
                setAuthError(error.message);
               
            });

    }


// login user
      const loginUser = (email, password) => {
          signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                  setAuthError('');
              })
              .catch((error) => {
                  setAuthError(error.message);
              });
      }



// Observer user state
useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user) {
          setUser(user);
        }
        
        else {
          setUser({})
        }
    });

    return () => unsubscribe;
}, [])

// signOut 
    const logout = () => {
        signOut(auth)
        .then(() => { })
        
    }


    return {
        user,
        authError,
        registerUser,
        loginUser,
        logout

    }
       
};

export default useFirebase;