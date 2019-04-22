import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthenticationService } from './services/authentication/authentication.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { NetworkRequestService } from './services/network-request/network-request.service';

import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  providers:[
    AuthenticationService,
    LocalStorageService,
    NetworkRequestService
  ]
})
export class SharedModule { }
