import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  theseParams : any
  parentParams: any
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params=>this.theseParams = params)

  }

}
