import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { BusinessCardPage } from '../business-card/business-card';
import { SharingSettingsPage } from '../sharing-settings/sharing-settings';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public firebaseProvider: FirebaseProvider) {
    this.cards = this.firebaseProvider.getCards();
  }

  loadBusinessCard() {
    let confirm = this.alertCtrl.create({
      title: 'Registered or Not ?',
      message: 'Select your state...',
      buttons: [
        {
          text: 'Register',
          handler: () => {
            this.registerUser();
          }
        },
        {
          text: 'Log In',
          handler: () => {
            this.loginUser();
          }
        }
      ]
    });
    confirm.present();
    this.navCtrl.push(BusinessCardPage);
  }

  /* User registration prompt */
  registerUser() {
    let prompt = this.alertCtrl.create({
      title: 'REGISTRATION',
      message: 'Enter a proper user name and a password',
      inputs: [
        {
          name: 'userName',
          placeholder: 'User Name'
        },
        {
          name: 'password',
          placeholder: 'Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            this.navCtrl.push(HomePage);
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            this.firebaseProvider.checkUser(data.userName, data.password);
          }
        }
      ]
    });
    prompt.present();
  }

  /* User login prompt */
  loginUser() {
    let prompt = this.alertCtrl.create({
      title: 'LOG IN',
      message: 'Enter your user name and password',
      inputs: [
        {
          name: 'userName',
          placeholder: 'User Name'
        },
        {
          name: 'password',
          placeholder: 'Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            this.navCtrl.push(HomePage);
          }
        },
        {
          text: 'Log In',
          handler: (data) => {
            this.firebaseProvider.checkUser(data.userName, data.password);
          }
        }
      ]
    });
    prompt.present();
  }

  loadSharingSettings() {
    this.navCtrl.push(SharingSettingsPage);
  }

}
