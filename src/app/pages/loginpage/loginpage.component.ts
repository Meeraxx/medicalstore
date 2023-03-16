import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
    
    email:string=''
    pass:string=''
    constructor(private fireS:FireService){ }
    submit() {
      this.fireS.logIn(this.email,this.pass)
      this.email= ''
      this.pass= ''
      
}
}
