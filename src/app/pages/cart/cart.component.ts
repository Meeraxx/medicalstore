import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
fname:any=''
lname:any=''
email:any=''
address:any=''
quantity:any=''
state:any=''
district:any=''
zip:any=''
nameoncard:any=''
ccno:any=''
expiry:any=''
cvv:any=''

constructor(private fs:FireService){}

submit(){
 let data={
    fname:this.fname,
lname:this.lname,
email:this.email,
address:this.address,
quantity:this.quantity,
state:this.state,
district:this.district,
zip:this.zip,
nameoncard:this.nameoncard,
ccno:this.ccno,
expiry:this.expiry,
cvv:this.cvv
  }

  this.fs.cart(data)
}

}
