import { Component, DoCheck, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, RouterLink,RouterLinkActive],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css',
})
export class PersonalInfoComponent implements OnInit {
  

  form = new FormGroup({
    Name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required , Validators.maxLength(11)],
    });

  }
  
}
