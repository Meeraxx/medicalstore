import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutuspageComponent } from './pages/aboutuspage/aboutuspage.component';
import { ContactuspageComponent } from './pages/contactuspage/contactuspage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegistrationpageComponent } from './pages/signup/registrationpage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { FeverComponent } from './pages/fever/fever.component';
import { PainreliefComponent } from './pages/painrelief/painrelief.component';
import { SinglepainComponent } from './pages/singlepain/singlepain.component';
import { DiabeticsComponent } from './pages/diabetics/diabetics.component';
import { SingledComponent } from './singled/singled.component';
import { WomencareComponent } from './pages/womencare/womencare.component';
import { SinglewomenComponent } from './pages/singlewomen/singlewomen.component';
import { BabycareComponent } from './pages/babycare/babycare.component';
import { SinglebabyComponent } from './pages/singlebaby/singlebaby.component';
import { CartComponent } from './pages/cart/cart.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutuspageComponent,
    ContactuspageComponent,
    LoginpageComponent,
    RegistrationpageComponent,
    NavbarComponent,
    FooterComponent,
    SinglepageComponent,
    FeverComponent,
    PainreliefComponent,
    SinglepainComponent,
    DiabeticsComponent,
    SingledComponent,
    WomencareComponent,
    SinglewomenComponent,
    BabycareComponent,
    SinglebabyComponent,
    CartComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
