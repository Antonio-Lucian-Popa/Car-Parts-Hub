import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { LogInComponent } from './auth/components/log-in/log-in.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'shop',
    loadChildren: () => import('./core/shop/shop.module').then(m => m.ShopModule)
  },
  { // TODO: Add gurad to block user to write in the url and access the profile page if is not logged in
    path: 'profile',
    loadChildren: () => import('./core/profile/profile.module').then(m => m.ProfileModule)
  },
  { path: 'signUp', component: SignUpComponent },
  { path: 'logIn', component: LogInComponent },
  // { path: 'second-component', component: SecondComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
