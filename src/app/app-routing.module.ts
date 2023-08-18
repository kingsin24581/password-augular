import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // Import the DashboardComponent

const routes: Routes = [
  { path: '', component: AppComponent }, // Add your initial component
  { path: 'dashboard', component: DashboardComponent } // Add the DashboardComponent route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
