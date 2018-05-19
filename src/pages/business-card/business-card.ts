import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

/**
 * Generated class for the BusinessCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business-card',
  templateUrl: 'business-card.html',
})
export class BusinessCardPage {

  cards: FirebaseListObservable<any[]>;
  company_name: string;
  company_tagline: string;
  first_name: string;
  last_name: string;
  title: string;
  address_line1: string;
  address_line2: string;
  contact: string;
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.cards = this.firebaseProvider.getCards();
  }

  addCardToDB(){
    this.firebaseProvider.addCard(
      this.company_name,
      this.company_tagline,
      this.first_name,
      this.last_name,
      this.title,
      this.address_line1,
      this.address_line2,
      this.contact,
      this.email
    );
  }



}
