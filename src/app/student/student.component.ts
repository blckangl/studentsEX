import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() { }

  Name = "mouhammed";
  Age = 20;
  Date = "11/11/1999";
  Desc = "<p>olmjazjdml</p>";

  ngOnInit(): void {
  }

}
