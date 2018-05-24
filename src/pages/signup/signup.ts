import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import * as firebase from 'firebase';
import { UserserviceProvider } from '../../providers/userservice/userservice';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [
    UserserviceProvider
  ]
})
export class SignupPage {

  public companyName: string;
  public companyTagline: string;
  public firstName: string;
  public lastName: string;
  public title: string;
  public addressLine1: string;
  public addressLine2: string;
  public contact: any;
  public email: any;
  public password: any;

  constructor(public userService: UserserviceProvider, 
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController, 
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  doSignup() {

    var account = {
      company_name: this.companyName,
      company_tagline: this.companyTagline,
      first_name: this.firstName,
      last_name: this.lastName,
      title: this.title,
      address_line1: this.addressLine1,
      address_line2: this.addressLine2,
      contact: this.contact,
      email: this.email,
      password: this.password
    };

    var that = this;

    var loader = this.loadingCtrl.create({
      content: 'Please Wait...'
    });
    loader.present();

    this.userService.signupUserService(account).then(authData => {
      // successful
      loader.dismiss();
      that.navCtrl.setRoot(HomePage);
    }, error => {
      loader.dismiss();
      // Unable to Log in
      let toast = this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    })

  }

}
