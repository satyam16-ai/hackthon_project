import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../Auth/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const NGOAuthContext = createContext();

export function useNGOAuth() {
  return useContext(NGOAuthContext);
}

export function NGOAuthProvider({ children }) {
  const [currentNGO, setCurrentNGO] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('NGO logged in:', user);
        const ngoRef = doc(db, 'ngoRegistrations', user.uid);
        const ngoSnap = await getDoc(ngoRef);

        if (ngoSnap.exists()) {
          console.log('NGO role data:', ngoSnap.data());
          setCurrentNGO({
            ...user,
            ...ngoSnap.data(),
          });
        } else {
          setCurrentNGO(user);
        }
      } else {
        setCurrentNGO(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    currentNGO,
    setCurrentNGO,
    logout,
    loading
  };

  return (
    <NGOAuthContext.Provider value={value}>
      {!loading && children}
    </NGOAuthContext.Provider>
  );
}