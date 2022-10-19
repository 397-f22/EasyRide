import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  child,
  getDatabase,
  onValue,
  push,
  ref,
  update,
} from "firebase/database";
import { useCallback, useEffect, useState } from "react";

import { initializeApp } from "firebase/app";

// DATABASE FUNCTIONS
const firebaseConfig = {
  apiKey: "AIzaSyC6g3b4lyidA5kktK0SiG23CmJUTm7obbc",
  authDomain: "easyride-purple.firebaseapp.com",
  databaseURL: "https://easyride-purple-default-rtdb.firebaseio.com",
  projectId: "easyride-purple",
  storageBucket: "easyride-purple.appspot.com",
  messagingSenderId: "371786505275",
  appId: "1:371786505275:web:f015ff3cd1778998fa101e",
  measurementId: "G-YY7BKZR40W",
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onValue(
        ref(database, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );

  return [data, error];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message =
    error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback(
    (value) => {
      update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)));
    },
    [database, path]
  );

  return [updateData, result];
};

// AUTHENTICATION FUNCTIONS
export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => onAuthStateChanged(getAuth(firebase), setUser));

  return [user];
};

// Add new ride
export const addNewRide = (uid, newRide) => {
  // Get a key for a new Post.
  const newRideKey = push(child(ref(database), "rides")).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates["/rides/" + newRideKey] = newRide;
  // updates['/user-rides/' + uid + '/' + newRideKey] = newRide;

  return update(ref(database), updates);
};
