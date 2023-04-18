import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

export const DataContext = createContext(null);
const AuthInfoProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  account login  //

  const userLoginHandler = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  account create with email and password  //

  const createUserHandler = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   user logout   //

  const logOut = () => {
    return signOut(auth);
  };

  //  email verify  //

  // const emailCheck = (email) => {
  //   return sendEmailVerification(auth, email);
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const info = {
    userLoginHandler,
    createUserHandler,
    setUser,
    user,
    logOut,
    loading,
  };

  return <DataContext.Provider value={info}>{children}</DataContext.Provider>;
};

export default AuthInfoProvider;
