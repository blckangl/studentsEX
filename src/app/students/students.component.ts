import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  studentName = '';
  canAddStudent = false;
  name = 'No name';
  age = 0;
  isStudentAdded = false;
  warning = false;
  students = [];

  constructor() {
    setTimeout(() => {
      this.canAddStudent = true;
    }, 1000);
  }

  ngOnInit(): void {

  }


  onStudentAdd(event: Event) {
    if (this.name === '') {
      return;
    }
    if(this.age == 0){
      this.warning = true;
      return;
    }


    this.warning = false;
    this.studentName = 'name is : ' + this.name;
    this.students.push({Name: this.name, Age: this.age});
    this.isStudentAdded = true;
  }

  isTextRed() {
    if (this.name !== 'No name') {
      return false;
    } else {
      return true;
    }
  }

}
