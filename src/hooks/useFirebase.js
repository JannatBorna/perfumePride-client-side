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
    const [admin, setAdmin] = useState(false);
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
                saveUser(email, name, 'POST');



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
            .finally(() => setIsLoading(false));
        
    }

// user information
   const saveUser = (email, displayName, method) => {
       const user = {email, displayName};
       fetch('https://perfumepride-server-side.onrender.com/users',{
           method: method,
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(user)
       })
       .then()
   }


// admin verified
  useEffect(() => {
      fetch(`https://perfumepride-server-side.onrender.com/users/${user.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
  }, [user.email])


    return {
        user,
        authError,
        registerUser,
        loginUser,
        admin,
        logout,
        isLoading

    }
       
};

export default useFirebase;