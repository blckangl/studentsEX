import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  isClicked = "";
  canAddStudent = false;
  name = "foulenjj";
  constructor() {
    setTimeout(() => {
      this.canAddStudent = true;
    }, 1000);
  }

  ngOnInit(): void {

  }



  onStudentAdd(event: Event) {
    this.isClicked = "clicked "+this.name;
    console.log(event);
  }

}
