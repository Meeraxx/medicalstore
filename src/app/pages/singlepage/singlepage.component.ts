import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
single:any;
pageid=localStorage.getItem('id')
constructor(private hero:HeroService,private router:Router){}

ngOnInit(): void{
  let num=Number(this.pageid);
  let singleDataArray=this.hero.singleData();
  this.single=singleDataArray.filter((d) => d.id ===num);
  console.log(this.single);
}

}