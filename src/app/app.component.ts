import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private currentRank : number = 10;

  changeRank(rank) : void {
     console.log("changeRank" , rank);
   this.currentRank = rank;
  }
}
