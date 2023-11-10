import admin from "firebase-admin"
import  {initializeApp, getApps} from "firebase-admin/app"
import {serviceKey} from "@/config/serviceKey" 
 
// var serviceAccount = require("config/serviceAccount.json");
 
 
 if(!getApps().length){
  initializeApp({
    credential: admin.credential.cert(serviceKey),
    databaseURL: "https://assignment-212f3-default-rtdb.firebaseio.com/",
    databaseAuthVariableOverride: {
      uid: "zuko4ever"
    }
  });
 }

// app/api/test/route.js
const db = admin.database()
 
export {db}

// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://assignment-212f3-default-rtdb.firebaseio.com"
// });
 