import { Component, OnInit } from '@angular/core';
import { routes } from './operators-routing.module';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  public routes = routes;
  constructor() {}

  ngOnInit() {}
}
