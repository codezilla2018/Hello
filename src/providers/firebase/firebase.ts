import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { BusinessCardPage } from '../../pages/business-card/business-card';

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
    this.getCards().push({
      user_name: uname,
      password: passwd
    });
  }

  /* set card details for the registered user */
  addCard(user_key, com_name, com_tagline, fname, lname, ttl, add_line1, add_line2, con_no, eml) {
    this.afd.object(`/Cards/${user_key}`).update({
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

  
  /* return true, if name exist */
  /*
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
  */

  checkUser(uname, pswd) {
    let reference = this.afd.database.ref('/Cards/');
    reference.orderByChild("user_name").equalTo(uname).on("child_added",function(snapshot) {
      let user = snapshot.val();
      if(user.password == pswd) {
        this.navCtrl.push(BusinessCardPage, {
          usr_key: snapshot.key
        });
      }
    })
  }
 
  removeUser(id) {
    this.afd.list('/users/').remove(id);
  }

}
