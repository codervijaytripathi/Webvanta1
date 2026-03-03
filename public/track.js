// public/track.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "webvanta1.firebaseapp.com",
  databaseURL: "https://webvanta1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webvanta1",
  storageBucket: "webvanta1.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase initialize karo
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Visitor data collect karo
function trackVisitor() {
  const visitorData = {
    timestamp: firebase.database.ServerValue.TIMESTAMP,
    page: window.location.pathname,
    referrer: document.referrer || 'direct',
    userAgent: navigator.userAgent,
    screenSize: `${window.innerWidth}x${window.innerHeight}`,
    language: navigator.language,
    sessionId: getSessionId()
  };

  // Realtime Database mein save karo
  const visitsRef = database.ref('visits').push();
  visitsRef.set(visitorData);
}

// Session ID generate ya retrieve karo
function getSessionId() {
  let sessionId = sessionStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
}

// Har page load par track karo
trackVisitor();
