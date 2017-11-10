import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as Guid from 'guid';
import { User } from '../model/user';


@Injectable()
export class CrudService {

  private database:any = null;

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
}
