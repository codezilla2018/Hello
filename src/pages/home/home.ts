import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BusinessCardPage } from '../business-card/business-card';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  loadBusinessCard() {
    this.navCtrl.push(BusinessCardPage);
  }

}
