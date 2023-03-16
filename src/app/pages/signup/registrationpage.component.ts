import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent {
lname:string=''
fname:string=''
email:string=''
pass:string=''
constructor(private fireS:FireService){ }
submit() {
  this.fireS.signUp(this.email,this.pass,this.fname,this.lname)
  this.email= ''
  this.pass= ''
  this.fname= ''
  this.lname=''
}
}
