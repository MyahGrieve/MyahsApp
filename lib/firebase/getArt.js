import {db} from './firebaseConfig'
export async function getArt () {
    const dbRef =  db.ref('/art')
    const dataSnapshot = await dbRef.once('value')
     return  dataSnapshot.val()
    
}