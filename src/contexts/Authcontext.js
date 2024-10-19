// src/contexts/AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../Auth/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        // Check if the user is an NGO
        const userRef = doc(db, 'ngoRegistrations', user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists() && userDoc.data().status === 'active') {
          setUserType('ngo');
        } else {
          // Check other user types here if needed
          setUserType('donor'); // Default to donor if not NGO
        }
      } else {
        setUserType(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userType,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}