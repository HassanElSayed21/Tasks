import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students = [
    { id: 1, name: 'Hassan', age: 20, major: 'CS' },
    { id: 2, name: 'Mona', age: 22, major: 'Math' },
    { id: 3, name: 'Ali', age: 21, major: 'Physics' },
  ];

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find(s => s.id === id);
  }

  updateStudent(updated: any) {
    const index = this.students.findIndex(s => s.id === updated.id);
    if (index > -1) {
      this.students[index] = updated;
    }
  }

  deleteStudent(id: number) {
    this.students = this.students.filter(s => s.id !== id);
  }
}
