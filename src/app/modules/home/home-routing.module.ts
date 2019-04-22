import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './pages/student-list/student-list/student-list.component';import { AuthGuard } from './../../core/guards/auth.guard';
import { OnboardingFormComponent } from './pages/onboarding-form/onboarding-form/onboarding-form.component';

const routes: Routes = [
  {path: 'onboard',component: OnboardingFormComponent, canActivate : [AuthGuard]},
  {path: 'onboard/:op/:id',component: OnboardingFormComponent, canActivate : [AuthGuard]},
  {path: 'list', component:StudentListComponent, canActivate : [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
