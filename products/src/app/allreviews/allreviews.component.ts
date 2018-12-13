import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allreviews',
  templateUrl: './allreviews.component.html',
  styleUrls: ['./allreviews.component.css']
})
export class AllreviewsComponent implements OnInit {
  theseParams : any
  parentParams: any
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params=>this.theseParams = params)

  }

}