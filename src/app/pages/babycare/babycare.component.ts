import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-babycare',
  templateUrl: './babycare.component.html',
  styleUrls: ['./babycare.component.css']
})
export class BabycareComponent {
  constructor(private hero:HeroService,private router:Router){}
  babycare=this.hero.getbabycare();
  
  gotoHere(id: any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singlebaby/' +id]);
      }
  
}
