import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevotionsPageRoutingModule } from './devotions-routing.module';

import { DevotionsPage } from './devotions.page';
import {Ionic4DatepickerModule} from "@logisticinfotech/ionic4-datepicker";
import { SharedModule } from "../shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DevotionsPageRoutingModule,
        Ionic4DatepickerModule,
        SharedModule
    ],
  declarations: [DevotionsPage]
})
export class DevotionsPageModule {}
