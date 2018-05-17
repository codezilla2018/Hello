import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharingSettingsPage } from './sharing-settings';

@NgModule({
  declarations: [
    SharingSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SharingSettingsPage),
  ],
})
export class SharingSettingsPageModule {}
