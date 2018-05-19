import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
  }

  getUsers() {
    return this.afd.list('/users/');
  }
 
  addUser(name) {
    this.afd.list('/users/').push(name);
  }
 
  removeUser(id) {
    this.afd.list('/users/').remove(id);
  }

}
