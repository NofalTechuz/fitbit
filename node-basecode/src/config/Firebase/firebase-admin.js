const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_URL || 'fitbit-ca9f5.appspot.com'
});

const bucket = admin.storage().bucket();

module.exports = { bucket };
