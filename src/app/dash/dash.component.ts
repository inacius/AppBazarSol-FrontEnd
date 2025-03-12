import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [] ;
  cardsForHandset = [];
  cardsForWeb = [];
  
  isHandsetObserver= this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }
      return false;
    })
  );
  isHandset: boolean;

  constructor(private breakpointObserver: BreakpointObserver, public appService:AppService) {}

  ngOnInit(){
    this.isHandsetObserver.subscribe(currentObserverValue =>{
      this.isHandset = currentObserverValue;
      this.loadCards();
    });

    this.appService.getDeals().subscribe(
      response => {
        this.cardsForHandset = response.handsetCards;
        this.cardsForWeb = response.webCards;
        this.loadCards();
      },
      error => {

      }
      
    );


  }

  loadCards(){
    this.cards = this.isHandset ? this.cardsForHandset : this.cardsForWeb
  }

}
