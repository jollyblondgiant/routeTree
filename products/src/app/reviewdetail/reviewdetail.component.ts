import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviewdetail',
  templateUrl: './reviewdetail.component.html',
  styleUrls: ['./reviewdetail.component.css']
})
export class ReviewdetailComponent implements OnInit {
  theseParams : any
  parentParams: any
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params=>this.theseParams = params)
  
  }

}
