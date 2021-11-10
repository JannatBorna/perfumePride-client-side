import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,

} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../pages/Login/Firebase/firebase.init";



firebaseInitialize()

const auth = getAuth();

const useFirebase = () => {

        const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

// new user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save user to the database
                // saveUser(email, name);



                updateProfile(auth.currentUser, {
                    displayName: name
                })
                .then(() => {

                }).catch((error) => {

                });

                history.replace('/');

            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));

    }




// login user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
          signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                  const destination = location?.state?.from || '/';
                  history.replace(destination);
                  setAuthError('');
              })
              .catch((error) => {
                  setAuthError(error.message);
              })
              .finally(() => setIsLoading(false));
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
        setIsLoading(false);
    });

    return () => unsubscribe;
}, [])

// signOut 
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => { })
        
    }


    return {
        user,
        authError,
        registerUser,
        loginUser,
        logout,
        isLoading

    }
       
};

export default useFirebase;