import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../../shared/models/student';
import { StudentService } from '../../../shared/services/student/student.service';

/*   */
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  
  students : IStudent[] ;
  categories = ['All','Domestic', 'International']
  studentsToShow : IStudent[];
  searchText;
  
  /* ctor to initialize student service */
  constructor(private studentService : StudentService) { }
  
  /* fetches all the students stored in local storage */
  ngOnInit() {
    var students = this.studentService.fetchAllStudents()
    this.students = students
    this.studentsToShow = students
  }
  
  /* Retrieves the value of the category selected from the drop down and filters the students on the basis of category selected
  * @param:   categoryValue   The value of the dropdown selected
  */
  onCategorySelection(categoryValue){
    var category = this.categories[categoryValue];
    switch (category){
      case "All":
      this.studentsToShow = this.students
      break;
      
      case "Domestic":
      var students = this.students;
      var studentsToShow : IStudent[] = []
      students.filter((value, index,array)=>{
        if (value.category == "Domestic"){
          studentsToShow.push(value);
        }
      })
      this.studentsToShow = studentsToShow;
      ;break;
      
      case "International":
      var students = this.students;
      var studentsToShow : IStudent[] = []
      students.filter((value, index, array)=>{
        if (value.category == "International"){
          studentsToShow.push(value);
        }
      })
      this.studentsToShow = studentsToShow;
      ;break;
    }
  }
  
}
