import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },   // Home default
      { path: 'about', component: AboutComponent },
      {
        path: 'students',
        children: [
          { path: 'list', component: StudentsListComponent },
          { path: 'details/:id', component: StudentDetailsComponent },
          { path: '', redirectTo: 'list', pathMatch: 'full' },
        ],
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
