import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singlepain',
  templateUrl: './singlepain.component.html',
  styleUrls: ['./singlepain.component.css']
})
export class SinglepainComponent {

  singlepain:any;
pageid=localStorage.getItem('id')
constructor(private hero:HeroService,private router:Router){}

ngOnInit(): void{
  let num=Number(this.pageid);
  let singleDataArray=this.hero.getsinglePain();
  this.singlepain=singleDataArray.filter((d) => d.id ===num);
  console.log(this.singlepain);
}

}
