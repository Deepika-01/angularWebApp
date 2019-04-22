# angularWebApp
This project is an example of student onboarding angular application.
It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

#For the Github page please access:
https://deepika-01.github.io/angularWebApp/login

#login credentials for the application are:
username: admin
password: 1234 

#Assumptions:
1. The Date of birth can be in range 1-jan-1992 to 31-dec-2000
2. Name can only be an alphabet(a-z/A-Z)
3. marks can range in 1-100

Tha application starts by signing in the application with the credentials given above.
The first page after login which opens is an onboarding form to insert details of a new student.
This form includes:
1. Name for the student, Fathers name, mother's name which can only be an alphabet. In case, of an error a message is displayed that name is invalid and must contain only alphabets
2. Category which can be of two types: Domestic, International.
3. On the basis category, a list of documents is retrieved from json. All the documents for international student are mandatory where for domestic some are mandatory while others are not. In case a mandatory document is not checked, after click on submit and error is generated that a mandatory document is missing.
4. Marks can be any number between 1-100.In case of error, a meesage is displayed that Marks can be any number between 1-100.

On click of Student List button, a screen with all the students is displayed. List of students have different color scheme for category in order to differentiate.
Initially, if there are no students entered by the user, a list students is retrieved from json as default data.
Students list may be filtered on the basis of Category(All, Domestic, International).
Students list may also be filtered on the basis of alphabets entered by the user in search bar.
Each student's details can be viewed, edited and deleted.

1. On the press of edit, the user is navigated to onboarding form with prefilled values that can be edited.
2. On the press of view, the user is navigated to onboarding form with prefilled values, but the form is disabled and thus cannot be edited.
3. On press of delete, a dialog is presented , if the user detailes need to be deleted, "yes" may be pressed, else "no" may be pressed.

If user presses home icon, user is directed to the onboarding form.
If the user presses account icon, an option to logout is also provided. The user may logout and will be redirected to login page.


NOTE: Local storage is used to save the details of the students and the admin creadentials.
