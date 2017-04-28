import { Component, OnInit } from '@angular/core';
import { Road } from "app/road";
import { Point } from "app/point";

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.css']
})
export class PlayFieldComponent implements OnInit {

  private _road: Road;

  constructor() {
    this._road = new Road();

    this._road.moved.subscribe((_var) => {
      if(this._road.isCarInPoint(new Point(0, 10))){
        console.log(_var );
      }
    });
  }

  ngOnInit() {
  }

  public get vm(): any {
    var rows = [];
    for (var y = 0; y < Point.MAX_Y; y++) {
      var cells = [];
      for (var x = 0; x <= Point.MAX_X; x++) {
        cells.push(this._road.isCarInPoint(new Point(x, y)));
      }
      rows.push({ cells: cells });
    }

    return { rows: rows };
  }


}
