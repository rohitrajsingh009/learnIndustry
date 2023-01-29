import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './shared/auth.interceptor';
import { HeaderInterceptor } from './shared/header.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailValidatorDirective } from './shared/email-validator.directive';




@NgModule({
    declarations: [
        AppComponent,
        EmailValidatorDirective,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
      
    ]
})
export class AppModule { }
