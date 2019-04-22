import { Injectable } from '@angular/core';
import { NetworkRequestService } from './../../../../../shared/services/network-request/network-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private url = "assets/files/documents.json";
  constructor(private networkRequestService : NetworkRequestService) { }

  /* Retrieves the list of documents from the url */
  fetchDocuments() : Observable<any> {
    return this.networkRequestService.fetchData(this.url);
  }
}
