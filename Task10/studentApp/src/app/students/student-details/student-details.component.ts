import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent implements OnInit {
  student: any;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = { ...this.studentService.getStudentById(id) }; // copy
  }

  saveName() {
    this.studentService.updateStudent(this.student);
    alert('Name updated successfully!');
  }
}
