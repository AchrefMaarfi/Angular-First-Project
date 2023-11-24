import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidencesComponent } from './residences/residences.component';
import { CardresidenceComponent } from './cardresidence/cardresidence.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShowappartComponent } from './showappart/showappart.component';
import { FormAppartComponent } from './form-appart/form-appart.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path : "home",component: ResidencesComponent},
  { path: "card", component: CardresidenceComponent },
  { path: "card/showappart/:id", component: ShowappartComponent },
  { path: "card/showappart/:id/addappart/:id", component: FormAppartComponent}
  // { path: "**", component: PagenotfoundComponent}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
