import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-ons',
  standalone: true,
  imports: [RouterModule, FormsModule , ReactiveFormsModule , CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css'
})
export class AddOnsComponent {

}
