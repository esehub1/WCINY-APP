import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { DataService} from './services/data.service';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared.module';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { BrMaskerModule } from 'br-mask';
/*import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";*/
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { TooltipsModule } from 'ionic4-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ReactiveFormsModule } from '@angular/forms';

// @ts-ignore
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: 'wciny_db',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AppRoutingModule,
      HttpClientJsonpModule,
      HttpClientModule,
    AuthModule,
      SharedModule,
    Ionic4DatepickerModule,
      BrMaskerModule,
    TooltipsModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
      FCM,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataService,
      SocialSharing,
      NativeStorage,
      Calendar,
      SQLite,
      NativeGeocoder,
    LaunchNavigator
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
