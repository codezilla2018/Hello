import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
  }

  /* functions for business cards */

  /* load the database */
  getCards() {
    return this.afd.list('/Cards/');
  }

  /* set user name and password for new user */
  addUser(uname, passwd) {
    this.afd.object(`/Cards/${uname}`).set(
      {
        password: passwd
      }
    );
  }

  /* set card details for the registered user */
  addCard(uname,com_name, com_tagline, fname, lname, ttl, add_line1, add_line2, con_no, eml) {
    this.afd.object(`/Cards/${uname}`).update({
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

  /* functions for user details */
  getUsers() {
    return this.afd.list('/users/');
  }

  /* return true, if name exist */
  checkUser(uname, pawd) {
    let user = this.afd.object('/Cards/', { preserveSnapshot: true});
    user.subscribe(snapshot => {
      if(snapshot.val().hasOwnProperty('password')) {
        // object exists
      } else {
        // object doesn't exists
        this.addUser(uname, pawd);
      }
    });
  }
 
  removeUser(id) {
    this.afd.list('/users/').remove(id);
  }

}
