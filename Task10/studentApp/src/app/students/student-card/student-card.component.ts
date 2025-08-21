import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-card.component.html',
})
export class StudentCardComponent {
  @Input() student: any;   // receives student data
}
