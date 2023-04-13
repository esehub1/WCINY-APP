import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'devotions',
        loadChildren: () => import('../devotions/devotions.module').then( m => m.DevotionsPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../events/events.module').then( m => m.EventsPageModule)
      },
      {
        path: 'prayer',
        loadChildren: () => import('../prayer/prayer.module').then( m => m.PrayerPageModule)
      },
      {
        path: 'testimony',
        loadChildren: () => import('../testimony/testimony.module').then( m => m.TestimonyPageModule)
      },
      {
        path: 'notes',
        loadChildren: () => import('../notes/notes.module').then( m => m.NotesPageModule)
      },
      {
        path: 'units',
        loadChildren: () => import('../units/units.module').then( m => m.UnitsPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'socials',
        loadChildren: () => import('../socials/socials.module').then( m => m.SocialsPageModule)
      },
      {
        path: 'new',
        loadChildren: () => import('../new/new.module').then( m => m.NewPageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../more/more.module').then( m => m.MorePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../messages/messages.module').then( m => m.MessagesPageModule)
      },
      {
        path: 'event',
        loadChildren: () => import('../event/event.module').then( m => m.EventPageModule)
      },
      {
        path: 'popover',
        loadChildren: () => import('../popover/popover.module').then( m => m.PopoverPageModule)
      },
      {
        path: 'popup',
        loadChildren: () => import('../popup/popup.module').then( m => m.PopupPageModule)
      },
      {
        path: 'covenant',
        loadChildren: () => import('../covenant/covenant.module').then( m => m.CovenantPageModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('../contacts/contacts.module').then( m => m.ContactsPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../notification/notification.module').then( m => m.NotificationPageModule)
      },
      {
        path: 'pastor',
        loadChildren: () => import('../pastor/pastor.module').then( m => m.PastorPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
