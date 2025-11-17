// ---------------------------
// KONFIGURASI FIREBASE
// ---------------------------
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBniqN6s7J81GDj1Mku_CziQKSc7A75zBQ",
  authDomain: "math-personality-test.firebaseapp.com",
  projectId: "math-personality-test",
  storageBucket: "math-personality-test.appspot.com",
  messagingSenderId: "722631845368",
  appId: "1:722631845368:web:101a9db7ef298b4392620d",
  measurementId: "G-DYCEBQGBYB"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Buat objek-auth, database, dan storage
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();


// --------------------------------
// FUNGSI UPLOAD FOTO PROFIL
// --------------------------------
async function uploadCroppedPhoto(uid, blob) {
  const ref = storage.ref(`profile_photos/${uid}.jpg`);
  await ref.put(blob);
  return await ref.getDownloadURL();
}


// --------------------------------
// FUNGSI BUAT DATA PROFIL DI FIRESTORE
// --------------------------------
async function createUserProfile(uid, name, email, photoURL) {
  await db.collection("users").doc(uid).set({
    name: name,
    email: email,
    photoURL: photoURL,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}
