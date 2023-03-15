import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singled',
  templateUrl: './singled.component.html',
  styleUrls: ['./singled.component.css']
})
export class SingledComponent {
  singled:any;
pageid=localStorage.getItem('id')
constructor(private hero:HeroService,private router:Router){}

ngOnInit(): void{
  let num=Number(this.pageid);
  let singleDataArray=this.hero.getsingled();
  this.singled=singleDataArray.filter((d) => d.id ===num);
  console.log(this.singled);
}
  

}
