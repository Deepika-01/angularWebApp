import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from './../models/student';

/* Filters an array of Students on the basis of a text provided */
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /* Checks if a given text is present in the username of the students in Student array
  * @param:   values      An array of students
  *           searchText  The text on the basis of which array is filtered
  * @return:  any         An array of students containing the given text in username field
  */
  transform(values: IStudent[], searchText: string): IStudent[] {
    if (!values) return [];
    if (!searchText) return values;
    searchText = searchText.toLocaleLowerCase();

    return values.filter(value => {
      return value.name.toLowerCase().includes(searchText);
    })
  }

}
