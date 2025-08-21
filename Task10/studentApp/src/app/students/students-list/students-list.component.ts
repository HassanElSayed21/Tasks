import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from '../student-card/student-card.component';
import { RouterModule } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [CommonModule, StudentCardComponent, RouterModule],
  templateUrl: './students-list.component.html',
})
export class StudentsListComponent {
  students: any[] = [];

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id);
    this.students = this.studentService.getStudents(); // refresh
  }
}
