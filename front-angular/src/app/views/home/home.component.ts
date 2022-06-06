import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() msg: string = '';
  legend = 'Im in Angular';

  constructor() { }

  ngOnInit(): void {
  }

}
