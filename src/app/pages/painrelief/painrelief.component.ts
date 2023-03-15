import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painrelief',
  templateUrl: './painrelief.component.html',
  styleUrls: ['./painrelief.component.css']
})
export class PainreliefComponent  {

  constructor(private hero:HeroService,private router:Router){}
  painrelief=this.hero.getPainRelief();
  
  gotoHere(id: any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singlepain/' +id]);
    }
  }

