import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diabetics',
  templateUrl: './diabetics.component.html',
  styleUrls: ['./diabetics.component.css']
})
export class DiabeticsComponent {
  
  constructor(private hero:HeroService,private router:Router){}
  diabetics=this.hero.getdiabetics();
  
  gotoHere(id: any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singled/' +id]);
    }
}
