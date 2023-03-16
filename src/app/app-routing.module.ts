import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutuspageComponent } from './pages/aboutuspage/aboutuspage.component';
import { ContactuspageComponent } from './pages/contactuspage/contactuspage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegistrationpageComponent } from './pages/signup/registrationpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { FeverComponent } from './pages/fever/fever.component';
import { PainreliefComponent } from './pages/painrelief/painrelief.component';
import { SinglepainComponent } from './pages/singlepain/singlepain.component';
import { DiabeticsComponent } from './pages/diabetics/diabetics.component';
import { SingledComponent } from './singled/singled.component';
import { WomencareComponent } from './pages/womencare/womencare.component';
import { SinglewomenComponent } from './pages/singlewomen/singlewomen.component';
import { BabycareComponent } from './pages/babycare/babycare.component';
import { singlebaby } from 'src/assets/data';
import { SinglebabyComponent } from './pages/singlebaby/singlebaby.component';
import { CartComponent } from './pages/cart/cart.component';
const routes: Routes = [
  {
    path : '' ,redirectTo:'loginpage',pathMatch:'full'
  },
  {
    path:'home',component:HomepageComponent
  },
  {
    path:'contactuspage',component:ContactuspageComponent
  },
  {
    path:'loginpage',component:LoginpageComponent
  },
  {
    path:'signup',component:RegistrationpageComponent
  },
  {
    path:'aboutuspage',component:AboutuspageComponent
  },
  {
    path:'registrationpage',component:RegistrationpageComponent
 },
 {
path:'single/:id',component:SinglepageComponent
 },
 {
  path:'fever',component:FeverComponent
 },
 {
  path:'painrelief',component:PainreliefComponent
 },
 {
  path:'singlepain/:id',component:SinglepainComponent
 },
 {
  path:'diabetics',component:DiabeticsComponent
 },
 {
 path:'singled/:id',component:SingledComponent
 },
 {
path:'womencare',component:WomencareComponent
 },
 {
path:'singlewomen/:id',component:SinglewomenComponent
 },
 {
  path:'babycare',component:BabycareComponent
 },
 {
  path:'singlebaby/:id',component:SinglebabyComponent
 },
 {
  path:'cart',component:CartComponent
 },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
