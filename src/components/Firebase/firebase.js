import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD6DuXhO-2zZQkkFSVb_zn20Xgz-4O85Nk",
    authDomain: "tennismakerswebsite.firebaseapp.com",
    databaseURL: "https://tennismakerswebsite.firebaseio.com",
    projectId: "tennismakerswebsite",
    storageBucket: "tennismakerswebsite.appspot.com",
    messagingSenderId: "569786958526",
    appId: "1:569786958526:web:3593025367fa1284d694ef"
  };

  class Firebase{
      constructor(){
          app.initializeApp(config);

          this.auth = app.auth();
      }

    doCreateUserWithEmailAndPassword = (email , password) =>
        this.auth.createUserWithEmailAndPassword(email , password);

    doSignInWithEmailAndPassword = (email , password) =>
      this.auth.SignInWithEmailAndPassword (email , password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);

  }

  export default Firebase;