import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCE_56r48rkS_1SFSgqYiZLU_AcMmNtfHg",
  authDomain: "firevuechat-dc68b.firebaseapp.com",
  projectId: "firevuechat-dc68b",
  storageBucket: "firevuechat-dc68b.appspot.com",
  messagingSenderId: "508083221053",
  appId: "1:508083221053:web:8d3f71475c4ead6d11f054",
};

const db = firebase.initializeApp(config);
export default db;
