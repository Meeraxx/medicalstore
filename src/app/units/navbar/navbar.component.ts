import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userEmail:any

  constructor(private auth: AngularFireAuth,private fireS:FireService) { }
  
  ngOnInit() {
    this.auth.user.subscribe(u => {
      this.userEmail=u?.email
    })
  }

  logout() {
    this.fireS.logOut()
  }
  
}
