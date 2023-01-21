import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleNameBRoutingModule } from './module-name-b-routing.module';
import { ModuleNameBComponent } from './module-name-b.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BannerCrousalComponent } from './banner-crousal/banner-crousal.component';
import { ConnectComponent } from './connect/connect.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetComponent } from './reset/reset.component';
import { LanguageComponent } from './language/language.component';


@NgModule({
  declarations: [
    ModuleNameBComponent,
    SignInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    BannerCrousalComponent,
    ConnectComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    ServicesComponent,
    UsersComponent,
    ResetComponent,
    LanguageComponent
  ],
  imports: [
    CommonModule,
    ModuleNameBRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ModuleNameBModule { }
