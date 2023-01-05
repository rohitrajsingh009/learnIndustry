import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./module-name-b/module-name-b.module').then(m => m.ModuleNameBModule)},
  { path: 'routingNameA', loadChildren: () => import('./module-name-a/module-name-a.module').then(m => m.ModuleNameAModule) , canActivate:[AuthGuard] }] //
   

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
