import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteRenduComponent } from './components/compte-rendu/compte-rendu.component';
import { CompterenduUpdateComponent } from './components/compte-rendu/compterendu-update/compterendu-update.component';
import { DocumentComponent } from './components/document/document.component';
import { ExamenListDetailComponent } from './components/examen/examen-list/examen-list-detail/examen-list-detail.component';
import { ExamenUpdateComponent } from './components/examen/examen-update/examen-update.component';
import { ExamenComponent } from './components/examen/examen.component';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { PatientUpdateComponent } from './components/patient/patient-update/patient-update.component';
import { PatientComponent } from './components/patient/patient.component';
import { ProtocoleCreateComponent } from './components/protocole/protocole-create/protocole-create.component';
import { ProtocoleListComponent } from './components/protocole/protocole-list/protocole-list.component';
import { ProtocoleUpdateComponent } from './components/protocole/protocole-update/protocole-update.component';
import { ProtocoleComponent } from './components/protocole/protocole.component';

const routes: Routes = [
  {path:"patient", component: PatientComponent},
  {path:"patientList", component: PatientListComponent},
  {path:"patientUpdate", component: PatientUpdateComponent},
  {path:"protocole", component: ProtocoleComponent},
  {path:"protocoleList", component: ProtocoleListComponent},
  {path:"protocoleUpdate", component: ProtocoleUpdateComponent},
  {path:"examen", component: ExamenComponent},
  {path:"examenDetails", component: ExamenListDetailComponent},
  {path:"examenUpdate", component: ExamenUpdateComponent},
  {path:"compteRendu", component: CompteRenduComponent},
  {path: "crUpdate", component: CompterenduUpdateComponent},
  {path: "document", component: DocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
