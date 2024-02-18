import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FanenRoutingModule } from './fanen-routing.module';
import { SeseComponent } from './sese/sese.component';


@NgModule({
  declarations: [
    SeseComponent
  ],
  imports: [
    CommonModule,
    FanenRoutingModule
  ]
})
export class FanenModule { }
