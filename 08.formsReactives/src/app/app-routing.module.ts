import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'reactive', loadChildren:() => import('./reative/reative.module').then(module => module.ReativeModule)},
  {path:'auth', loadChildren:() => import('./auth/auth.module').then(module => module.AuthModule)},
  {path:'**', redirectTo:'reactive'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
