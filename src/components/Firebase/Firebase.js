// Importo firebase
import firebase from "firebase/app";
// Importo firestore
import 'firebase/firestore'

// Credenciales
const firebaseConfig = {
  apiKey: "AIzaSyBWOs8ds-xIT75Np31KYF1pfxfYm6n3G-8",
  authDomain: "sonido-codeado.firebaseapp.com",
  projectId: "sonido-codeado",
  storageBucket: "sonido-codeado.appspot.com",
  messagingSenderId: "366497315784",
  appId: "1:366497315784:web:bf49ed31da29e429741efd"
};

const app = firebase.initializeApp(firebaseConfig)

// Funcion para usar firestore
export function getFirestore() {
  return firebase.firestore(app)
}

export function formatDate(date) {
  return firebase.firestore.Timestamp.fromDate(date)
}