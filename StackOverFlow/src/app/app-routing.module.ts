import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'home'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'front',
    loadChildren:()=>import('./modules/front/front.module').then(u=>u.FrontModule)
  },
  {
    path: '**',
    component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
