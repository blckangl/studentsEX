import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  studentName = 'nothing';
  canAddStudent = false;
  name = '';
  isStudentAdded = false;
  constructor() {
    setTimeout(() => {
      this.canAddStudent = true;
    }, 1000);
  }

  ngOnInit(): void {

  }



  onStudentAdd(event: Event) {
    this.studentName = 'name is : ' + this.name;
    console.log(event);
    this.isStudentAdded = true;
  }

}
