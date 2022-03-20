import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const initFirebase = () => {
  try {
    const app = initializeApp(firebaseConfig);
    console.log("init firebase");
    return app;
  } catch (error) {
    console.log("initFirebase", error);
  }
};

export const initFbAnalytics = () => {
  if (typeof window !== "undefined") {
    try {
      const analytics = getAnalytics(initFirebase());
      console.log("init firebase analytics");
    } catch (error) {
      console.log("init analytics", error);
    }
  }
};
