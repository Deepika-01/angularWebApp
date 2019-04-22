import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from './../../material/material.module';
import { HomeRoutingModule } from './home-routing.module';

import { OnboardingFormComponent } from './pages/onboarding-form/onboarding-form/onboarding-form.component';

import { StudentListComponent } from './pages/student-list/student-list/student-list.component';
import { StudentListCardComponent } from './pages/student-list/student-list-card/student-list-card.component';
import { DialogComponent } from './pages/student-list/dialog/dialog.component';

import { FilterPipe } from './shared/pipes/filter.pipe';

import { DocumentService } from './shared/services/document/document.service';
import { StudentService } from './shared/services/student/student.service';

@NgModule({
  declarations: [
    OnboardingFormComponent, 
    StudentListComponent, 
    StudentListCardComponent,
    DialogComponent, 
    FilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports : [
  ],
  providers :[
    DocumentService,
    StudentService
  ],
  entryComponents:[DialogComponent]
})
export class HomeModule { }
