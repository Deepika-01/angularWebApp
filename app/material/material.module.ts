import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatDialogModule ,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatOptionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material';

/* class includes all the modules for from material library */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  exports : [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
