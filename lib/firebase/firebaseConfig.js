import admin from "firebase-admin"
import  {initializeApp, getApps} from "firebase-admin/app"
import {serviceKey} from "@/config/serviceKey" 
 
 
 
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
 