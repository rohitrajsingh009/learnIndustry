import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BannerCrousalComponent } from './banner-crousal/banner-crousal.component';
import { ConnectComponent } from './connect/connect.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LanguageComponent } from './language/language.component';
import { ModuleNameBComponent } from './module-name-b.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResetComponent } from './reset/reset.component';
import { ServicesComponent } from './services/services.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: BannerCrousalComponent  },
  {path:'page-not-found',component:PageNotFoundComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'register',component:SignUpComponent},
  {path:'sign-in',component:SignInComponent},
  

  {path:'about-us',component:ModuleNameBComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:"connect",component:ConnectComponent},
  {path:"services",component:ServicesComponent},
  {path:'reset/:id/:token',component:ResetComponent},
  {path:'language',component:LanguageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleNameBRoutingModule { }
