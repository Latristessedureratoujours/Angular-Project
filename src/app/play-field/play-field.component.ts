import { Component, OnInit } from '@angular/core';
import { Road } from "app/road";
import { Point } from "app/point";
import { Game } from "app/Game";

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.css']
})
export class PlayFieldComponent implements OnInit {

  private _game: Game;

  constructor() {
    this._game = new Game();
  }

  ngOnInit() {
  }

  public get isGameOver(): boolean{
    return this._game.isOver;
  }

  public get vm(): any {
    return {
      cars: this._game.road.cars.map(c => {
        return { x: c.basePoint.x, y: c.basePoint.y };
      }),
      myCar: { x: this._game.playerCarPoint.x, y: this._game.playerCarPoint.y }
    };
  }

 public onkeyDown(event: KeyboardEvent): void{
   console.log(event);

   if(event.keyCode === 37){
     this._game.turnLeft();
   } else if(event.keyCode === 39){
     this._game.turnRight();
   }
 }
}
