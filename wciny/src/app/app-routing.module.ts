import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {InfoResolverService} from './services/info-resolver.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
        /*      path: '',
              redirectTo: 'tabs',
              // redirectTo: 'folder/Inbox',
              pathMatch: 'full'*/
    },
    {
        path: 'event/:id',
        resolve: {
            special: InfoResolverService
        },
        loadChildren: './event/event.module#EventPageModule'
    },
    {
        path: 'give/:id',
        resolve: {
            special: InfoResolverService
        },
        loadChildren: './give/give.module#GivePageModule'
    },
    {
        path: 'wofbi',
        loadChildren: () => import('./wofbi/wofbi.module').then(m => m.WofbiPageModule)
    },
    {
        path: 'wincare',
        loadChildren: () => import('./wincare/wincare.module').then(m => m.WincarePageModule)
    },
    {
        path: 'socials',
        loadChildren: () => import('./socials/socials.module').then(m => m.SocialsPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule)
    },
    {
        path: 'notes',
        loadChildren: () => import('./notes/notes.module').then(m => m.NotesPageModule)
    },
    {
        path: 'prayer',
        loadChildren: () => import('./prayer/prayer.module').then(m => m.PrayerPageModule)
    },
    {
        path: 'testimony',
        loadChildren: () => import('./testimony/testimony.module').then(m => m.TestimonyPageModule)
    },
    {
        path: 'covenant',
        loadChildren: () => import('./covenant/covenant.module').then( m => m.CovenantPageModule)
    },
    {
        path: 'feedback',
        loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
    },
    {
        path: 'service',
        loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule)
    },
    {
        path: 'pastor',
        loadChildren: () => import('./pastor/pastor.module').then( m => m.PastorPageModule)
    }
    /*
    {
      path: 'devotions',
      loadChildren: () => import('./devotions/devotions.module').then( m => m.DevotionsPageModule)
    },

    {
      path: 'units',
      loadChildren: () => import('./units/units.module').then( m => m.UnitsPageModule)
    },
    {
      path: 'settings',
      loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
    },
    {
      path: 'popover',
      loadChildren: () => import('./popover/popover.module').then( m => m.PopoverPageModule)
    },
    {
      path: 'popup',
      loadChildren: () => import('./popup/popup.module').then( m => m.PopupPageModule)
    },

    {
      path: 'contacts',
      loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
    },
    {
      path: 'pastor',
      loadChildren: () => import('./pastor/pastor.module').then( m => m.PastorPageModule)
    }

 */
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
