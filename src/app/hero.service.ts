import { Injectable } from '@angular/core';
import { diabetics, fever, painrelief, single, singled, singlepain,womencare,singlewomen,babycare,singlebaby} from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {}
    giveData(){
      return fever
  
   }

   singleData()
   {
    return single;
   }

   getPainRelief(){
    return painrelief;
   }
   
     getsinglePain()
     {
      return singlepain;
     }
     
     getdiabetics(){
      return diabetics;
     }
  
    getsingled()
    {
      return singled;
    }
    getwomencare(){
      return womencare;
    }
    getsinglewomen(){
      return singlewomen;
    }
    
      getbabycare(){
        return babycare;
      }
getsinglebaby(){
  return singlebaby;

}
  
}
