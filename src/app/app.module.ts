import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './components/patient/patient.component';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PatientCreateComponent } from './components/patient/patient-create/patient-create.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GlobalConstComponent } from './const/global-const/global-const.component';
import { PatientUpdateComponent } from './components/patient/patient-update/patient-update.component';
import { ProtocoleComponent } from './components/protocole/protocole.component';
import { ProtocoleListComponent } from './components/protocole/protocole-list/protocole-list.component';
import { ProtocoleCreateComponent } from './components/protocole/protocole-create/protocole-create.component';
import { ProtocoleUpdateComponent } from './components/protocole/protocole-update/protocole-update.component';
import { ExamenComponent } from './components/examen/examen.component';
import { ExamenListComponent } from './components/examen/examen-list/examen-list.component';
import { ExamenCreateComponent } from './components/examen/examen-create/examen-create.component';
import { ExamenUpdateComponent } from './components/examen/examen-update/examen-update.component';
import { ExamenListDetailComponent } from './components/examen/examen-list/examen-list-detail/examen-list-detail.component';
import { CompteRenduComponent } from './components/compte-rendu/compte-rendu.component';
import { CompterenduListComponent } from './components/compte-rendu/compterendu-list/compterendu-list.component';
import { CompterenduCreateComponent } from './components/compte-rendu/compterendu-create/compterendu-create.component';
import { CompterenduUpdateComponent } from './components/compte-rendu/compterendu-update/compterendu-update.component';
import { DocumentComponent } from './components/document/document.component';
import { DocumentListComponent } from './components/document/document-list/document-list.component';
import { DocumentCreateComponent } from './components/document/document-create/document-create.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
  // console.log("test")
    keycloak.init({

      
      config: {

        "realm": "NewFrontRis",
        "url": "http://localhost:8180/",
        "clientId": "FrontRis"
        // url: 'http://localhost:8180/auth',
        // realm: 'frontRIS',
        // clientId: 'RIS'
      },
      initOptions: {
         onLoad:'login-required'
        //  silentCheckSsoRedirectUri:
        //   window.location.origin + '/assets/silent-check-sso.html'
        //onLoad:'check-sso'

       
        //onLoad: 'check-sso',
        // silentCheckSsoRedirectUri:
        //   window.location.origin + '/assets/silent-check-sso.html'
      }
      
    });

    console.log(keycloak.getToken)
}


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientListComponent,
    PatientCreateComponent,
    GlobalConstComponent,
    PatientUpdateComponent,
    ProtocoleComponent,
    ProtocoleListComponent,
    ProtocoleCreateComponent,
    ProtocoleUpdateComponent,
    ExamenComponent,
    ExamenListComponent,
    ExamenCreateComponent,
    ExamenUpdateComponent,
    ExamenListDetailComponent,
    CompteRenduComponent,
    CompterenduListComponent,
    CompterenduCreateComponent,
    CompterenduUpdateComponent,
    DocumentComponent,
    DocumentListComponent,
    DocumentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,

    CommonModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule ,

    NgbModule,
    BrowserModule,

    
   KeycloakAngularModule


  ],
  providers: [

     {provide: APP_INITIALIZER, deps: [KeycloakService], useFactory: initializeKeycloak, multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
