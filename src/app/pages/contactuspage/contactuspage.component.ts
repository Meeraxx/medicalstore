import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-contactuspage',
  templateUrl: './contactuspage.component.html',
  styleUrls: ['./contactuspage.component.css']
})
export class ContactuspageComponent {
  fname:string=''
  email:string=''
  age:string=''
  phoneno:string=''
  msg:string=''
  constructor(private fs:FireService){}

  submit(){
    let data={
      fname:this.fname,
      email:this.email,
      age:this.age,
      phoneno:this.phoneno,
      msg:this.msg
    }
    this.fs.feedback(data)
  }

}

