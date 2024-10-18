// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAlqxewyOt81aWlOZ1Xskpwjl2s9JKxcio",
  authDomain: "donorvista.firebaseapp.com",
  databaseURL: "https://donorvista-default-rtdb.firebaseio.com",
  projectId: "donorvista",
  storageBucket: "donorvista.appspot.com",
  messagingSenderId: "631636166495",
  appId: "1:631636166495:web:b092326c6ed44e9ab818ea",
  measurementId: "G-V7D49GXVJ2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, app, storage };