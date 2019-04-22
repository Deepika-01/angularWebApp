import { Injectable } from '@angular/core';
import { IStudent } from '../../models/student';
import { LocalStorageService } from './../../../../../shared/services/local-storage/local-storage.service';
import { NetworkRequestService } from './../../../../../shared/services/network-request/network-request.service';

/* Class provides methods to perform CRUD operations on local storage for students */
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private url = "assets/files/students.json";
  private key = "students"
  
  constructor(
    private localStorageService: LocalStorageService,
    private networkRequestService : NetworkRequestService
    ) { }
    
    insertMockData(){
      if(!this.localStorageService.fetchDataFromLocalStorage(this.key)){
        this.networkRequestService.fetchData(this.url).subscribe(observer=>{
          var students = observer[this.key];
          var data = JSON.stringify(students);
          this.localStorageService.storeInLocalStorage(this.key, data);
        })
      }
    }
    
    /* Returns all the students from the local storage
    * in case, the students are present in local storage, stores mock data in local storage
    * @return: An array of students stored in the local storage
    */
    fetchAllStudents() : IStudent[]{
      var data = localStorage.getItem(this.key);
      if (!data){
        this.insertMockData()
      }else{
        return JSON.parse(data) as IStudent[];
      }
    }
    
    /* Returns a student with the given id
    * @param:   id        Id of the student whose details needs to be retrived
    * @return   student   Student instance of the given id
    */
    fetchStudentWithId(id: number) : IStudent{
      var data = this.fetchAllStudents()
      if (data != undefined || data != null){
        return data[id - 1]
      }
    }
    
    /* Insert a student in the local storage
    * If there is no data in local storage, it creates a new array with the student and stores the array in local storage
    * If there is data in local storage, method increment the length of the array and assigns it as id of the student and stores data in local storage
    * @param: an instance of Student class*/
    insertStudentInLocalStorage(student: IStudent){
      var students : IStudent[] = this.fetchAllStudents()
      if (students !== null){
        student.id = students.length + 1
        students.push(student);
      }else{
        students = [student];
      }
      var data = JSON.stringify(students);
      this.localStorageService.removeFromLocalStorage(this.key);
      this.localStorageService.storeInLocalStorage(this.key, data);
    }
    
    /* Updates a student in the local storage
    * @param: an instance of Student class
    */
    updateLocalStorage(student : IStudent){
      var students = this.fetchAllStudents();
      var id : number = student.id as number;
      students.splice(id-1,1,student);
      this.localStorageService.removeFromLocalStorage(this.key);
      var data = JSON.stringify(students);
      this.localStorageService.storeInLocalStorage(this.key, data);
      
    }
    
  }
  