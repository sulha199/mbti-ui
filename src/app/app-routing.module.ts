import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteList } from './const';
import { PerspectiveComponent, PerspectiveResultComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RouteList.perspective
  },
  {
    path: RouteList.perspective,
    component: PerspectiveComponent,
  },
  {
    path: RouteList.result,
    component: PerspectiveResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
