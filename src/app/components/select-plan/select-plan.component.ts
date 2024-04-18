import { CommonModule } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [RouterModule, FormsModule , ReactiveFormsModule , CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css'
})
export class SelectPlanComponent {


}
