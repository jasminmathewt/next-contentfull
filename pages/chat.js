import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import ChatRoom from "../Components/ChatRoom";

//https://www.cometchat.com/tutorials/how-to-build-a-chat-app-with-nextjs

// initialization
if (!firebase.apps.length) {
  console.log("Ifff");
  firebase.initializeApp({
    apiKey: "AIzaSyDOUoqMlyN1sEElf6mKBJZVoFsQHRb2kqE",
    authDomain: "seejan-chat.firebaseapp.com",
    projectId: "seejan-chat",
    storageBucket: "seejan-chat.appspot.com",
    messagingSenderId: "1071804286256",
    appId: "1:1071804286256:web:f60512292e9ab29024b4f5",
    measurementId: "G-8TRWE41YLK"
  });
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const db = firebase.firestore();

export default function Home() {
  // initial states
  const [user, setUser] = useState(() => auth.currentUser);

  // automatically check a user's auth status
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // update the user current state
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  // sign in
  const signInWithGoogle = async () => {
    // get the google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();

    // signing in user
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  // signout
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container chat-container">
      <main>
        {user ? (
          <>
            <nav id="sign_out">
              <h2>Chat With Friends</h2>
              <button onClick={signOut}>Sign Out</button>
            </nav>
            <ChatRoom user={user} db={db} />
          </>
        ) : (
          <section id="sign_in">
            <h1>Welcome to Chat Room</h1>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
          </section>
        )}
      </main>
    </div>
  );
}