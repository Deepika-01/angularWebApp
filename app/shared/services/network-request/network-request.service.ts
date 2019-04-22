import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Performs operations on the network */
@Injectable({
  providedIn: 'root'
})
export class NetworkRequestService {

  constructor(private httpClient: HttpClient) {
   }

   /* Fetch the data from the given url and returns an observable for that value 
   * @param:    fromUrl           Url from which data needs to be fetched
   * @return    Observable<any>   Observable of type any
   */
  fetchData(fromUrl : string) : Observable<any>{
    return this.httpClient.get(fromUrl);
  }
}
