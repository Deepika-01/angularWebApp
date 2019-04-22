import { Injectable } from '@angular/core';

/* Performs operations on the local storage */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /* Retreives the data from the local storage with the given key
  * @param:   key       Key for the local storage
  * @return:  string    String value retrived from the local storage
  */
  fetchDataFromLocalStorage(key : string) : string{
    return localStorage.getItem(key)
  }

  /* Stores the data with the respective key in the local storage
  * @param:   key       Key for the local storage
  * @param:   value     Value to be stored in the local storage against the key
  * @return:  string    String value retrived from the local storage
  */
  storeInLocalStorage(key : string, value: string){
    localStorage.setItem(key, value)
  }

  /* Deletes the data from the local storage with the given key
  * @paarm:   key       Key for the local storage
  */
  removeFromLocalStorage(key:string){
    localStorage.removeItem(key);
  }
}
