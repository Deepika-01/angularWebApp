import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IStudent } from './../../../shared/models/student';
import { StudentService } from './../../../shared/services/student/student.service';

/* Creates a dialog to ask for confirmation from the user to delete the information related to a student.
* If 'Yes' pressed deletes the student details from the local storage
*/
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: IStudent,
    private studentService : StudentService) { }

  ngOnInit() {
  }

  /* closes the dialog */
  closeDialog(){
    return this.dialogRef.close();
  }

  /* deleted the user from the local storage */
  delete(){
    this.studentService.updateLocalStorage(this.data as IStudent);
    this.closeDialog();
    location.reload();
    }

}
