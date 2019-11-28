import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { GridDataComponent } from './grid-data/grid-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/Registration', pathMatch: 'full' },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'gridData', component: GridDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
