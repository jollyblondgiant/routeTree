import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  theseParams : any
  parentParams: any
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params=>this.theseParams = params)

  }

}
