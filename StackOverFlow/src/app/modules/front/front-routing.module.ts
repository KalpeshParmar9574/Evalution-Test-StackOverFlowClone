import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from 'src/app/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'users',
   loadChildren:()=>import('./user/user.module').then((f)=>f.UserModule)
  },
  {
    path: 'utilities',
    loadChildren: () => import ('./utilites/utilites.module').then((u)=>u.UtilitesModule)
  },
  {
    path: '**',
    component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
