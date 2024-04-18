import { Routes } from '@angular/router';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';
import { StepsComponent } from './shared/steps/steps.component';

export const routes: Routes = [
    {path: '', redirectTo: '/steps/personal-info', pathMatch: 'full'},
    {path: 'steps/personal-info', component:PersonalInfoComponent},
    {path: 'select-plan', component: SelectPlanComponent},
    {path: 'steps', component: StepsComponent}
];
