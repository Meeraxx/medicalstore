import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fever',
  templateUrl: './fever.component.html',
  styleUrls: ['./fever.component.css']
})
export class FeverComponent {

constructor(private hero:HeroService,private router:Router){}
fever=this.hero.giveData();

gotoHere(id: any){
  localStorage.setItem('id',id);
  this.router.navigate(['/single/' +id]);
    }
}
