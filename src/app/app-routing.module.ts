import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerspectiveComponent, PerspectiveResultComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'perspective'
  },
  {
    path: 'perspective',
    component: PerspectiveComponent,
  },
  {
    path: 'result',
    component: PerspectiveResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
