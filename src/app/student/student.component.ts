import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input('name') studentname ;
  @Input() Age ;
  constructor() { }


  Date = "11/11/1999";

  ngOnInit(): void {
  }

}
