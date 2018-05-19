import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
  }

  getCards() {
    return this.afd.list('/Cards/');
  }

  addCard(com_name, com_tagline, fname, lname, ttl, add_line1, add_line2, con_no, eml) {
    this.afd.list('/Cards/').push({
      company_name: com_name,
      company_tagline: com_tagline,
      first_name: fname,
      last_name: lname,
      title: ttl, 
      address_line1: add_line1, 
      address_line2: add_line2, 
      contact_no: con_no, 
      email: eml
    });
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
