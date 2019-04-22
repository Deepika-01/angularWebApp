import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { IDocument } from './../../../shared/models/documents';
import { IStudent } from '../../../shared/models/student';

import { StudentService } from './../../../shared/services/student/student.service';
import { DocumentService } from './../../../shared/services/document/document.service';

/* Displays the UI on the basis of url, 
* If the url does not include any parameters, Its assumed to be an insert form for the details of students onboarding,
* If the url includes operation as view, The details of a student with the respective id passed in the parameters is displayed,
* If the url includes operation as edit, The details of a student with the respective id passed in parameters is presented as editable.
*/
@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css']
})
export class OnboardingFormComponent implements OnInit {
  
  minDate = new Date(1992, 0, 1)
  maxDate = new Date(2000, 0, 1)
  regexForNames = "^[a-zA-Z]+(([ ][a-zA-Z])?[a-zA-Z]*)*$"

  onboardForm : FormGroup;
  categories = [
    {'id':1, 'name':'Domestic'},
    {'id':2, 'name':'International'}
  ];
  
  domesticDocuments : IDocument[];
  internationalDocuments : IDocument[];
  
  documentsToShow : IDocument[];
  default = "Domestic";
  validCheckboxes : Boolean = true;
  student : IStudent;
  
  id = null
  op = null
  
  constructor(
    private activatedRoute : ActivatedRoute, 
    private formBuilder : FormBuilder,
    private studentService : StudentService,
    private documentService: DocumentService,
    private snackbar: MatSnackBar
    ) { }
    
    ngOnInit() {
      this.studentService.insertMockData();
      this.documentService.fetchDocuments().subscribe(observer=>{
        this.domesticDocuments = observer['domestic'];
        this.internationalDocuments = observer['international'];
        this.setId()
      })
      this.createForm(null);
    }
    
    /* Extracts the id from the url parameters to fetch the operation to be performed and id of the student on whose details operation needs to be performed.
    */
    setId(){
      this.activatedRoute.params.subscribe(params => {
        this.id = (params['id'])
        this.op = (params['op'])
      });
      if(this.id != null){
        var student = this.studentService.fetchStudentWithId(parseInt(this.id));
        console.log(student);
        this.createForm(student);
      }else{
        this.createForm(null);
      }
    }
    
    /* Creates an onboarding form for the details of the given student
    * In case null is provides, a form with empty fields is created
    * In case a student object is provided, the form is provided with pre-filled fields
    * @param    student   instance of class Student
    */
    createForm(student?: IStudent){
      if(student == null){
        this.createFormWithout();
      }else{
        this.createFormWithFields(student);
      }
      
      if (this.op == "view"){
        this.disableForm();
      }
    }
    
    /* Disables the form in case the operation on the form is view */
    disableForm(){
      this.onboardForm.disable()
    }
    
    /* Creates an onboarding form with the given student instance
    *@param     student    instance of class Student
    */
    createFormWithFields( student : IStudent){
      this.student = student;
      this.onboardForm = this.formBuilder.group({
        username : [student.name, [Validators.required, Validators.maxLength(15), Validators.pattern(this.regexForNames)]],
        category : [student.category],
        document_checkboxes : this.addCheckboxesForStudent(student),
        dob: [student.dob],
        father_name : [student.father_name, [Validators.required, Validators.maxLength(15),Validators.pattern(this.regexForNames)]],
        mother_name : [student.mother_name, [Validators.required, Validators.maxLength(15), Validators.pattern(this.regexForNames)]],
        marks : [student.marks, [Validators.required, Validators.max(100), Validators.min(1)]]
      })
    }
    
    /* Creates an onboarding form with empty fields */
    createFormWithout(){
      this.onboardForm = this.formBuilder.group({
        username : ['', [Validators.required, Validators.maxLength(15), Validators.pattern(this.regexForNames)]],
        category : [this.default],
        document_checkboxes : this.addCheckboxes(this.default),
        dob : '',
        father_name : ['', [Validators.required, Validators.maxLength(15), Validators.pattern(this.regexForNames)]],
        mother_name : ['', [Validators.required, Validators.maxLength(15), Validators.pattern(this.regexForNames)]],
        marks : ['', [Validators.required, Validators.max(100), Validators.min(1)]]
      })
    }
    
    /* Creates checkboxes on the onboarding form */
    addCheckboxes(category : string){
      if (category == "Domestic"){
        this.documentsToShow = this.domesticDocuments;
      }else{
        this.documentsToShow = this.internationalDocuments;
      }
      
      if (this.documentsToShow !== undefined){
        const checkboxes = this.documentsToShow.map(element =>{
          if (element.isChecked == null){
            return this.formBuilder.control(false);
          }else{
            return this.formBuilder.control(element.isChecked);
          }
        })
        return this.formBuilder.array(checkboxes);
      }else{
        console.log('documents r undefined')
      }
    }
    
    /* Creates checkboxes on the onboarding form */
    addCheckboxesForStudent(student : IStudent){
      if (student == null || student.category == 'Domestic'){
        this.documentsToShow = this.domesticDocuments;
      }else{
        this.documentsToShow = this.internationalDocuments;
      }
      
      if (this.documentsToShow !== undefined){
        const checkboxes = student.documentsList.map(element =>{
          if (element.isChecked == null){
            return this.formBuilder.control(false);
          }else{
            return this.formBuilder.control(element.isChecked);
          }
        })
        return this.formBuilder.array(checkboxes);
      }else{
        console.log('documents r undefined')
      }
    }
    
    /* Called when a category is selected */
    onCategorySelection(){
      var categorySelected = this.onboardForm.controls['category'].value;
      this.onboardForm.controls['document_checkboxes'] = this.addCheckboxes(categorySelected)
    }
    
    /* getter for FormArray of form controls */
    get documentArray(){
      return this.onboardForm.get('document_checkboxes') as FormArray;
    }
    
    /* Called on submission of the form */
    insert(){
      var username = this.onboardForm.controls['username'].value;
      var category = this.onboardForm.controls['category'].value;
      var father_name = this.onboardForm.controls['father_name'].value;
      var mother_name = this.onboardForm.controls['mother_name'].value;
      var marks = this.onboardForm.controls['marks'].value;
      var document_checkboxes = this.onboardForm.controls['document_checkboxes'].value as Boolean[]
      var dob = this.onboardForm.controls['dob'].value;
      
      this.validCheckboxes = this.checkIfCheckedDocumentsAreValid(document_checkboxes)
      
      if (this.validCheckboxes){
        var student : IStudent = { 
          id: this.student ? this.student.id : -1,
          name : username, 
          category : category, 
          documentsList : this.fetchDocumentsToInsert(document_checkboxes),
          dob: dob,
          father_name : father_name,
          mother_name: mother_name,
          marks:marks
        }
        if (this.id != null){
          this.studentService.updateLocalStorage(student);
        }else{
          this.studentService.insertStudentInLocalStorage(student);
        }

        let matSnackBarConfig = new MatSnackBarConfig();
        matSnackBarConfig.horizontalPosition = "center";
        matSnackBarConfig.verticalPosition = "top";
        this.snackbar.open("Successfully inserted a student record","", matSnackBarConfig)

        setTimeout(
          function(){ 
          location.reload(); 
          }, 2000);
        
      }else{
        console.log('a mandatory doc is not checked')
      }
    }
    
    /* get the documents to be inserted in the student record
    * @param:   document_checkboxes   An array of boolean values of the checkboxes on the form
    * @return:   IDocument[]           An array of documents 
    */
    private fetchDocumentsToInsert(document_checkboxes: Boolean[]): IDocument[]{
      var documentsToInsert : IDocument[] = [];
      for (let index=0; index<this.documentsToShow.length; index++){
        documentsToInsert.push({
          name: this.documentsToShow[index].name,
          mandatory : this.documentsToShow[index].mandatory,
          isChecked : document_checkboxes[index]
        })
      }
      return documentsToInsert;
    }
    
    /* Checks if the documents checked are valid by matching the mandatory field and the checkbox value
    * @param:   document_checkboxes   An array of boolean values of the checkboxes on the form
    * @return:  Boolean               True in case checkboxes are valiue else false
    */
    private checkIfCheckedDocumentsAreValid(document_checkboxes:Boolean[]) : Boolean{
      for (let index=0; index<this.documentsToShow.length; index++){
        if ((this.documentsToShow[index].mandatory !== document_checkboxes[index])){
          if (this.documentsToShow[index].mandatory){
            return false
          }
        }
      }
      return true
    }
    
  }
  