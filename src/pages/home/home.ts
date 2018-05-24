import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { UserserviceProvider } from '../../providers/userservice/userservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    UserserviceProvider
  ]
})
export class HomePage {

  public isShared: boolean;
  public distance: number;
  public lat: any;
  public lng: any;

  constructor(public userService: UserserviceProvider, public navCtrl: NavController, public geolocation: Geolocation) {
    this.isShared = true;
    this.distance = 100;
  }


  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then((pos) => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      this.userService.updateLocationDetails(this.lat,this.lng);
    }).catch((error) => {
      console.log(error);
    });
    this.userService.getNeighboursDetails();
    
  }
}
