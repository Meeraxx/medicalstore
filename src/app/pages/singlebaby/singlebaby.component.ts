import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singlebaby',
  templateUrl: './singlebaby.component.html',
  styleUrls: ['./singlebaby.component.css']
})
export class SinglebabyComponent {

  singlebaby:any;
  pageid=localStorage.getItem('id')
  constructor(private hero:HeroService,private router:Router){}
  
  ngOnInit(): void{
    let num=Number(this.pageid);
    let singleDataArray=this.hero.getsinglebaby();
    this.singlebaby=singleDataArray.filter((d) => d.id ===num);
    console.log(this.singlebaby);
  }
}
