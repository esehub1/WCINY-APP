import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevotionsPage } from './devotions.page';

const routes: Routes = [
  {
    path: '',
    component: DevotionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevotionsPageRoutingModule {}
