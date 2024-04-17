import { Routes } from '@angular/router';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';

export const routes: Routes = [
    {path: '', redirectTo: '/personal-info', pathMatch: 'full'},
    {path: 'personal-info', component:PersonalInfoComponent},
    {path: 'select-plan', component: SelectPlanComponent},
];
