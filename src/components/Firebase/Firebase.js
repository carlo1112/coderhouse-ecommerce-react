// Firebase is imported
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Credentials
const firebaseConfig = {
  apiKey: "AIzaSyBWOs8ds-xIT75Np31KYF1pfxfYm6n3G-8",
  authDomain: "sonido-codeado.firebaseapp.com",
  projectId: "sonido-codeado",
  storageBucket: "sonido-codeado.appspot.com",
  messagingSenderId: "366497315784",
  appId: "1:366497315784:web:bf49ed31da29e429741efd"
};

const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = app.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()

// Function to get date
export const formatDate = (date) => {
  return firebase.firestore.Timestamp.fromDate(date)
}

const getLoggedUser = async (userId) => {
  // console.log("userId")
  try {
    const query = await db
      .collection("users")
      .where("uid", "==", userId)
      .get()
    if (query.docs.length > 0) {
      const data = await query.docs[0].data();
      return {
        uid: data.uid,
        name: data.name,
        email: data.email,
      }
    }
    return null
  } catch (err) {
    // console.log(err.message)
  }
  return null;
}

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider)
    const user = res.user
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get()
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      })
    }
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password)
    return user
  } catch (error) {
    console.error("Error:", error.message)
    // alert(error.message)
    alert("El email o password son incorrectos.")
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password)
    const user = res.user
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email)
    alert("Password reset link sent!")
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
};

const logout = async () => {
  await auth.signOut()
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
  getLoggedUser,
};
