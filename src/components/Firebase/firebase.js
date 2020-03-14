import app from 'firebase/app';

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
          app.initializeApp(config)
      }
  }

  export default Firebase;