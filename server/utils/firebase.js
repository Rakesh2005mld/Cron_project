// utils/firebase.js
const admin = require("firebase-admin");

const {
  FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY
} = process.env;

if (!FIREBASE_PRIVATE_KEY) {
  throw new Error("Missing Firebase private key in environment variables");
}

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: FIREBASE_PROJECT_ID,
    clientEmail: FIREBASE_CLIENT_EMAIL,
    privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  }),
  databaseURL: "https://cron-project-2df3e.firebaseio.com",
});

const db = admin.firestore();
module.exports = db;