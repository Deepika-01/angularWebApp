import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from './../dialog/dialog.component';
import { IStudent } from './../../../shared/models/student';

/* Creates a card layout to display details of a student and an option to view, edit or delete the details of the student */
@Component({
  selector: 'app-student-list-card',
  templateUrl: './student-list-card.component.html',
  styleUrls: ['./student-list-card.component.css']
})
export class StudentListCardComponent implements OnInit {
  @Input() student : IStudent;

  /* ctor to initialize an instance of Router and MatDialog */
  constructor(private router : Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  /* Navigates to the onboard form with the details of the student clicked in uneditable mode*/
  view(){
    this.router.navigateByUrl("/onboard/:"+String(this.student.id))
  }

  /* Navigates to the onboard form with the details of the student clicked in editable mode */
  edit(){
    this.router.navigateByUrl("/onboard/:"+String(this.student.id))
  }

  /* Opens dialog with dialog configurations to ask the user for confirmation to delete the details of the student */
  delete(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '20%';
    dialogConfig.width = '30%';
    dialogConfig.data = this.student;
    let dialogRef = this.dialog.open(DialogComponent, dialogConfig);
  }

}
