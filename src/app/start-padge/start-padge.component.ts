import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-start-padge',
  templateUrl: './start-padge.component.html',
  styleUrls: ['./start-padge.component.css']
})
export class StartPadgeComponent implements OnInit {

  constructor(private _router: Router) { 
    
  }

  public newGame(): void {
    this._router.navigate(["play-field"])
  }


  ngOnInit() {
  }

}
