import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  theseParams : any
  parentParams: any
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
  
    this._route.params.subscribe(params=>this.theseParams = params)
   
  }

}
