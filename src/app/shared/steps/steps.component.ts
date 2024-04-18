import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { PersonalInfoComponent } from "../../components/personal-info/personal-info.component";

@Component({
    selector: 'app-steps',
    standalone: true,
    templateUrl: './steps.component.html',
    styleUrl: './steps.component.css',
    imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, RouterModule, PersonalInfoComponent]
})
export class StepsComponent {

}
