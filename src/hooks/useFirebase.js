import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useState, useEffect } from 'react';
import initializeAuthentication from '../Component/Login/Firebase/firebase.init';


initializeAuthentication();
const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [isloading, setIsloading] = useState(true);
  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (users) => {
      if (users) {
        setUsers(users);
      } else {
        setUsers({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleprovider);
  };
  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        const newUser = { ...users, displayName: name }; // recommend
        setUsers(newUser);

        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .finally(() => setIsloading(false));
  };

  return {
    logOut,
    signInUsingGoogle,
    isloading,
    setIsloading,
    users,
    setUsers,
    updateName,
  };
};

export default useFirebase;
