import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import propTypes from "prop-types";

import React, { useContext, useEffect, useState } from "react";
import "../firebase";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const auth = useAuth();
    const unsbuscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsbuscribe;
  }, []);
  // signup
  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    //   update profile
    await updateProfile(auth.currentUser, { displayName: username });

    const user = auth.currentUser;
    setCurrentUser({ ...user });
  }
  // login
  async function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }
  // logout
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }
  const value = {
    currentUser,
    signup,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  //   rest: propTypes.object,
  children: propTypes.any,
};
