import React, { Children, createContext } from "react";
import { app } from "../firebase/firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authData = {
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
