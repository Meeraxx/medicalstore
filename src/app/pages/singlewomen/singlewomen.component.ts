import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singlewomen',
  templateUrl: './singlewomen.component.html',
  styleUrls: ['./singlewomen.component.css']
})
export class SinglewomenComponent {
  
  singlewomen:any;
pageid=localStorage.getItem('id')
constructor(private hero:HeroService,private router:Router){}

ngOnInit(): void{
  let num=Number(this.pageid);
  let singleDataArray=this.hero.getsinglewomen();
  this.singlewomen=singleDataArray.filter((d) => d.id ===num);
  console.log(this.singlewomen);
}

}
