import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule],   // 👈 this makes routerLink work
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {}
