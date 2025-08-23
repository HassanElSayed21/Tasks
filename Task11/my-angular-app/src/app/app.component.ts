import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  myForm: FormGroup;
  user:any={name:"Hassan"}
  constructor() {
    this.myForm = new FormGroup({
     name : new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(7)]),
     email : new FormControl('',[Validators.required , Validators.email])
    })

  }

  onSubmit() {

    console.log(this.myForm.valid);
    this.myForm.patchValue({name:"Hassan",email: "HasaanElsayed86@gmail.com"})
    
    
    this.myForm.markAllAsTouched();
    

    if (this.myForm.valid) {

      console.log(this.myForm.value);
    }else{
      alert("plz enter valid info")
      return;
    }
  }
}
