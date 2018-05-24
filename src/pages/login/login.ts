import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import * as firebase from 'firebase';
import { UserserviceProvider } from '../../providers/userservice/userservice';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    UserserviceProvider
  ]
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(public userService: UserserviceProvider, public loadingCtrl:LoadingController, public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin() {

    var that = this;

    var loader = this.loadingCtrl.create({
      content: 'Please Wait...'
    });
    loader.present();

    this.userService.loginUserService(this.email, this.password).then(authData => {
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
      
      // empty the password field
      that.password = ""
    });
  }

  forgotPassword() {

  }

  redirectToSignup() {
    this.navCtrl.push(SignupPage);
  }

}
