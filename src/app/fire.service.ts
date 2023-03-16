import { Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { doc, setDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireService {


   constructor(private auth: Auth,private router:Router,private fire:Firestore) { }
//signUp method
signUp(email: string, password: string, fname: string,lname:string) {
  createUserWithEmailAndPassword(this.auth, email, password).then((res) => { 
    const uid = res.user.uid
    const email = res.user.email
    const user = {
      email: email,
      lname: lname,
      fname:fname
    }

    const docRef = doc(this.fire, "users", uid)
    setDoc(docRef, user).then(() => {
      console.log("Data added successfully");
    }).catch((err) => { 
      console.log(err);
    })
    alert("Signup succesfully")
    this.router.navigate(['/home']);
  }, err => {
    if (err.code === "auth/email-already-in-use") {  
      alert("Email already in use")
    }     
    this.router.navigate(['/signup']);
  })
}

   //login method()
   logIn(email:string,pass:string) {
    signInWithEmailAndPassword(this.auth,email,pass).then(res => {
    alert("Log In successfully")
    this.router.navigate(['/home'])
    }).catch(err => {
      alert(err)
    })
    }



   //contact-us method()
   feedback(data: any) {
    const feedbackCollection = collection(this.fire,'feedbackDetails')
    addDoc(feedbackCollection,data).then(res => {
      alert("feedback added successfully")
    }).catch(err => {
      alert(err)
    })
      
   }
   //logout method()
  logOut() {
    signOut(this.auth).then(res => {
      alert("Log out successfully")
      this.router.navigate(['/'])
    }).catch(err => {
      alert(err)
    })
  }

   }


