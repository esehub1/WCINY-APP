import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WofbiPageRoutingModule } from './wofbi-routing.module';
import { WofbiPage } from './wofbi.page';
import {BrMaskerModule} from "br-mask";
import { TooltipsModule } from 'ionic4-tooltips';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WofbiPageRoutingModule,
        ReactiveFormsModule,
        BrMaskerModule,
        TooltipsModule
    ],
  declarations: [WofbiPage]
})
export class WofbiPageModule {}
