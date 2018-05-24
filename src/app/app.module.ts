import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';
import { UserserviceProvider } from '../providers/userservice/userservice';
import { Geolocation } from '@ionic-native/geolocation';

export const firebaseConfig = {
  apiKey: "AIzaSyCMgGSJOM2-xUE3DQyV7CkOEWJ34w6-IHI",
  authDomain: "hello-app-18af6.firebaseapp.com",
  databaseURL: "https://hello-app-18af6.firebaseio.com",
  projectId: "hello-app-18af6",
  storageBucket: "hello-app-18af6.appspot.com",
  messagingSenderId: "360992481992"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserserviceProvider,
    Geolocation
  ]
})
export class AppModule {}
