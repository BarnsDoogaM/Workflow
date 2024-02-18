import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeseComponent } from './sese/sese.component';

const routes: Routes = [
  {path: 'sese', component: SeseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FanenRoutingModule { }
