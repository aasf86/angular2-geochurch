import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as Guid from 'guid';
import { User } from '../model/user';


@Injectable()
export class CrudService {

  private database:any = null;
  private provider:any = null;

  constructor() {

      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyA5HL4YrjV6G4vLkFS6UMBmUQPsEy0KRyc",
        authDomain: "aasf86.firebaseapp.com",
        databaseURL: "https://aasf86.firebaseio.com",
        projectId: "aasf86",
        storageBucket: "aasf86.appspot.com",
        messagingSenderId: "91046757585"
      };
      
      firebase.initializeApp(config);

      this.database = firebase.database();

      this.provider = new firebase.auth.GoogleAuthProvider();
      this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      firebase.auth().languageCode = 'pt';
   }

   insert(user:User){
     if(user == null) return;
     user.guid = Guid.raw();
     this.database.ref('users/' + user.guid).set(user);     
   }

   delete(user:User){     
    this.database.ref('users/' + user.guid).remove();
   }

   selectAll(callBack){     
    this.database.ref('users/').on('value', function(source){
      var listResult = [];
      for(var key in source.val()){
        listResult.push(source.val()[key]);
      }
      callBack(listResult);      
    });
   }

   login(callBack){
    firebase.auth().signInWithPopup(this.provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      localStorage.setItem('user', JSON.stringify(result));
      // ...      
      console.log(result);
      callBack(user);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.error(error);
    });     
   }
}
