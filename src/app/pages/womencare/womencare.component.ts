import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-womencare',
  templateUrl: './womencare.component.html',
  styleUrls: ['./womencare.component.css']
})
export class WomencareComponent {

  constructor(private hero:HeroService,private router:Router){}
  womencare=this.hero.getwomencare();
  
  gotoHere(id: any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singlewomen/' +id]);
      }
}
