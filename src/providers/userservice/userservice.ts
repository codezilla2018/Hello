import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class UserserviceProvider {

  public data: any;
  public fireAuth: any;
  public userProfile: any;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
  }

  loginUserService(email:string, password:string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signupUserService(account: {}) {
    return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then((newUser) => {
      // sign in the user
      return this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then(() => {
        // successful login, create user profile
        let currentuser = this.fireAuth.currentUser;
        this.userProfile.child(`${currentuser.uid}`).set(account);
      });
    });
  }

  updateLocationDetails(lat: number, lng: number) {
    let currentuser = this.fireAuth.currentUser;
    return this.userProfile.child(`${currentuser.uid}/location/`).set({
      latitude: lat,
      longtitude: lng
    });
  }

  getNeighboursDetails() {
    let currentuser = this.fireAuth.currentUser;
    return console.log(this.userProfile.orderByChild("first_name").uid);
  }

}
