import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { PatientUpdateComponent } from './components/patient/patient-update/patient-update.component';
import { PatientComponent } from './components/patient/patient.component';

const routes: Routes = [
  {path:"patient", component: PatientComponent},
  {path:"patientList", component: PatientListComponent},
  {path:"patientUpdate", component: PatientUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
