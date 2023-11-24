import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';

//child routing
const routes: Routes = [
  {
    path: "annonce", component: AnnonceComponent,
    children: [
      { path: "list", component: ListAnnonceComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // forChild() used with child routes
  ],
  exports:[RouterModule]
})
export class AnnonceRoutingModule { }
