import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';

/**
 * Generated class for the SharingSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sharing-settings',
  templateUrl: 'sharing-settings.html',
})
export class SharingSettingsPage {

  options: GeolocationOptions;
  lat: any;
  lng: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  getUserPosition() {
    
    this.geolocation.getCurrentPosition(this.options).then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    }).catch((error) => {
      console.log("Got an error ", error);
    });
  }

  ionViewDidLoad() {
    this.getUserPosition();
  }

}
